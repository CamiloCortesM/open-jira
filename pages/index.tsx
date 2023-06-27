import { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Card, CardHeader, Grid } from '@mui/material';
import { EntryList } from '@/components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Openjira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
            }}
          >
            <CardHeader title="Pending" />

            {/* {Add new entry} */}
            {/* list of entries */}
            <EntryList status='pending' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
            }}
          >
            <CardHeader title="In Progress" />

            {/* {Add new entry} */}
            {/* list of entries */}
            <EntryList status='in-progress' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
            }}
          >
            <CardHeader title="Completed" />

            {/* {Add new entry} */}
            {/* list of entries */}
            <EntryList status='finished' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
