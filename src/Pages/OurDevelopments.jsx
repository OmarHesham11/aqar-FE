import {
  FormControl, InputLabel, Select, MenuItem, Slider as SliderArea, Button,
  CardMedia, CardActionArea, Card
} from '@mui/material';
import Slider from 'react-slick';
import img from "../assets/imgs/construction.jfif";
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "100px",
  slidesToShow: 1,
  speed: 500,
  rows: 3,
  slidesPerRow: 2
};

function OurDevelopments() {
  return (
    <>
      <div className="row justify-content-center align-items-center ">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <h3 style={{ color: "grey" }} >Find Your Property</h3>
              <FormControl fullWidth className='mt-4'>
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                  labelId="location-select-label"
                  id="location-select"
                  // value={age}
                  label="Property type"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

              </FormControl>

              <FormControl fullWidth className='mt-4'>
                <InputLabel id="demo-simple-select-label">Property type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Property type"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

              </FormControl>


              <div className="Area mt-4">
                <InputLabel id="slider-label" >Area</InputLabel>
                <SliderArea labelId="slider-label" defaultValue={700} min={70} max={500} aria-label="Default" valueLabelDisplay="auto" />
              </div>



              <FormControl fullWidth className='mt-4'>
                <InputLabel id="finishing-select-label">Finishing Status</InputLabel>
                <Select
                  labelId="finishing-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Finishing status"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>



              <FormControl fullWidth className='mt-4'>
                <InputLabel id="Delivery-select-label">Delivery Date</InputLabel>
                <Select
                  labelId="Delivery-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Delivery Date"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <div className="Price mt-4">
                <InputLabel id="slider-label" >Price</InputLabel>
                <SliderArea labelId="slider-label" defaultValue={700} min={2000000} max={20000000} aria-label="Default" valueLabelDisplay="auto" />
              </div>

              {/* <button className='btn btn-outline-primary p-2'>Outlined</button> */}
              <Button variant="outlined" className='p-3 w-100'>Search</Button>

              <Button variant="outlined" color="secondary" className='p-3 w-100 mt-3'>Reset</Button>

            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-8 col-sm-12 p-5">
          <div className="slider-container">
            <Slider {...settings}>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>

              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>



              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>


              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>


              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>


              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
              <div className='p-2'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>
            </Slider>
          </div>
        </div>

      </div>

    </>
  )
}

export default OurDevelopments