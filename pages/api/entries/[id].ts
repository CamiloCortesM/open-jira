import { db } from '@/database';
import { Entry, IEntry } from '@/models';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'The id is not valid' });
  }
  switch (req.method) {
    case 'GET':
      return getEntry(req, res);
    case 'PUT':
      return updateEntry(req, res);

    default:
      res.status(400).json({
        message: 'method not exists',
      });
  }

  res.status(200).json({ message: 'Example' });
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: 'Entry not exist for this id: ' + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(201).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({
      message:
        error.errors.status.message ||
        'something has gone wrong with the update',
    });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  try {
    const entry = await Entry.findById(id);
    if (!entry) {
      await db.disconnect();
      return res
        .status(400)
        .json({ message: 'Entry not exist for this id: ' + id });
    }
    await db.disconnect();
    res.status(200).json(entry);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({
      message: 'talk to admin',
    });
  }
};
