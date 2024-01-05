import '../../assets/global.css'
import './style.css'
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import CardCustom from '../../components/CardCustom'
import SelectCustom from '../../components/SelectCustom';
import Input from '@mui/joy/Input';
import Grid from '@mui/material/Grid';
import results from '../../db/results';
import { Divider } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import TableCustom from '../../components/TableCustom';

export default function Home() {
  return (
    <div className='home'>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 4, md: 16 }}>
        {results.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardCustom name={item.name} valueSession={item.value} description={item.description}/>
          </Grid>
        ))}
      </Grid>

      <Box className='home__content'>
        <h3 className='fontCustom'>Search Filters</h3>

        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 6, md: 12 }} sx={{padding: '20px'}}>
          {Array.from(Array(3)).map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <SelectCustom />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ margin: '10px 0' }}/>

        <Box sx={{ display: 'flex', gap: 2, padding: '20px' }}>
          <Box sx={{justifyContent: 'flex-end', width: '10%'}}>
            <Button disabled>
              <FileUploadIcon /> Export
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', width: '90%'}}>
            <Input placeholder="Search User…" variant="outlined" />
            <Button>+ Add New User</Button>
          </Box>
        </Box>

        <TableCustom />
      </Box>
    </div>
  )
}
