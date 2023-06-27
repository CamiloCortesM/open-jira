import { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

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
            <CardContent>
              {/* {Add new entry} */}
              {/* list of entries */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
            }}
          >
            <CardHeader title="In Progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
            }}
          >
            <CardHeader title="Completed" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
