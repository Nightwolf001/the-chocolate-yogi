import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Container, Typography, DialogTitle, Modal } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade, DialogAnimate } from '../../components/animate';

const _ = require('lodash');
// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: '#EAE4D0',
  borderRadius: '25px',
  boxShadow: 24,
  p: 4,
};

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 19,
  paddingTop: theme.spacing(25),
  backgroundColor: theme.palette.design.onPrimary,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const Ellipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  borderRadius: '50%',
  width: '100%',
  height: "200px",
  right: 0,
  left: 0,
  bottom: "-100px",
  backgroundColor: theme.palette.design.onPrimary,
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)"
}));

// ----------------------------------------------------------------------

export default function HomeDisplay({ selectedTheme }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  if (selectedTheme === null) return null;

  const cards = [
    {
      id: 1,
      full_title: 'DARK SALTED CARAMEL CRUNCH',
      title_1: 'DARK SALTED',
      title_2: 'CARAMEL CRUNCH',
      grams: '35g',
      image: '/assets/illustrations/30_dark_salted_caramel_crunch.png',
      background: theme.palette.chocolate.caramel,
    },
    {
      id: 2,
      full_title: 'MYLK CHOCOLATE CREAM',
      title_1: 'MYLK CHOCOLATE',
      title_2: 'CREAM',
      grams: '35g',
      image: '/assets/illustrations/30_mylk_chocolate_cream.png',
      background: theme.palette.chocolate.cream,
    },
    {
      id: 3,
      full_title: 'MYLK HUNNYCOMB CRUNCH',
      title_1: 'MYLK HUNNYCOMB',
      title_2: 'CRUNCH',
      grams: '35g',
      image: '/assets/illustrations/30_mylk_hunnycomb_crunch.png',
      background: theme.palette.chocolate.hunnycomb,
    },
    {
      id: 4,
      full_title: 'MYLK PEPPERMINT CRUNCH',
      title_1: 'MYLK PEPPERMINT',
      title_2: 'CRUNCH',
      grams: '35g',
      image: '/assets/illustrations/30_mylk_peppermint_crunch.png',
      background: theme.palette.chocolate.peppermint,
    },
    {
      id: 5,
      full_title: 'DARK ALMOND SEA SALT',
      title_1: 'DARK ALMOND',
      title_2: 'SEA SALT',
      grams: '70g',
      image: '/assets/illustrations/70_dark_almond_seasalt.png',
      background: theme.palette.chocolate.almond,
    },
    {
      id: 6,
      full_title: 'MYLK COOKIE CRUMBLE',
      title_1: 'MYLK COOKIE',
      title_2: 'CRUMBLE',
      grams: '70g',
      image: '/assets/illustrations/70_mylk_cookie_crumble.png',
      background: theme.palette.chocolate.cookie,
    },
    {
      title_1: '',
      title_2: '',
      grams: '',
      image: '',
      background: '',
    },
    {
      id: 7,
      full_title: 'MYLK HAZELNUT',
      title_1: 'MYLK HAZELNUT',
      title_2: '',
      grams: '70g',
      image: '/assets/illustrations/70_mylk_hazelnut.png',
      background: theme.palette.chocolate.hazelnut,
    }
  ]

  const packs = [
    {
      id: 1,
      title: 'DARK SALTED CARAMEL CRUNCH',
      sub_title: 'Creamy Dark Chocolate with Salted Caramel Flavour',
      description: 'A little sweet, a little salty, our Dark Salted Caramel Crunch has been blended with Himalayan salt that enhances the delicious caramel flavour. This chocolate slab is so decadent that you will keep coming back for more.',
      image: '/assets/packs/caramel.png',
      ingredients: 'Chocolate contains cocoa solids 50,2% minimum. Coconut Sugar, cacao paste, cocoa butter, crunch (6%), (coconut sugar, raising agent [sodium bicarbonate]), Himalayan salt (0.1%), sunflower lecithin.',
    },
    {
      id: 2,
      title: 'MYLK CHOCOLATE CREAM',
      sub_title: 'Creamy Mylk Chocolate',
      description: 'Our Mylk Chocolate Cream has the taste and texture of traditional chocolate, but with a 100% plant- based recipe. Mylk Chocolate Cream snaps with each bite and melts into creamy chocolatey deliciousness, which you can’t resist.',
      image: '/assets/packs/cream.png',
      ingredients: 'Chocolate contains cocoa solids 32,2% minimum. Coconut sugar, cocoa butter, coconut flour, desiccated coconut, cacao paste, sunflower lecithin.',
    },
    {
      id: 3,
      title: 'MYLK HUNNYCOMB CRUNCH',
      sub_title: 'Creamy Mylk Chocolate with Hunnycomb flavour',
      description: 'A delectable melt-in-your-mouth experience. Our Mylk Hunnycomb Crunch is handmade with the finest caramelised crunchy hunnycomb shards, that have been drenched in dairy-free chocolate to create a crunchy and creamy treat.',
      image: '/assets/packs/hunnycomb.png',
      ingredients: 'Chocolate contains cocoa solids 32,2% minimum. Coconut sugar, cocoa butter, coconut flour, desiccated coconut, cacao paste, hunnycomb crunch (6%), (coconut sugar, raising agent [sodium bicarbonate]), sunflower lecithin.',
    },
    {
      id: 4,
      title: 'MYLK PEPPERMINT CRUNCH',
      sub_title: 'Creamy Mylk Chocolate with Peppermint Crunch',
      description: 'Mylk Peppermint Crunch will bring music to your mouth, with a fusion of smooth mylk chocolate and caramelised peppermint crunch pieces. This nostalgic slab is both refreshing and mouth-watering.',
      image: '/assets/packs/peppermint.png',
      ingredients: 'Chocolate contains cocoa solids 32,2% minimum. Coconut sugar, cocoa butter, coconut flour, desiccated coconut, cacao paste, crunch (6%), (coconut sugar, raising agent [sodium bicarbonate]), Peppermint oil (0,1%), sunflower lecithin.',
    },
    {
      id: 5,
      title: 'DARK ALMOND SEA SALT',
      sub_title: 'Smooth Dark Chocolate with almonds and a subtle touch of sea salt',
      description: 'Dark Almond and Sea Salt is a sumptuous delight that blends the deep, luxurious essence of dark chocolate with the satisfying taste of crushed almonds, complemented by a hint of sea salt.',
      image: '/assets/packs/almond.png',
      ingredients: 'Organic coconut sugar, almonds 27%, cocoa mass (22%), cocoa butter, sunflower lecithin, sea salt (0.4%).',
    },
    {
      id: 6,
      title: 'MYLK COOKIE CRUMBLE',
      sub_title: 'Creamy Mylk Chocolate with Cookie Crumble',
      description: 'Mylk Cookie Crumble is a delectable chocolate treat that combines the classic flavour of cookies with the creamy “mylk” chocolate. This irresistible bar features a smooth and sweet mylk chocolate base that is generously studded with crunchy, cookie crumbles.',
      image: '/assets/packs/cookie.png',
      ingredients: 'Coconut sugar, cocoa butter, cookie crumble (12.5%), (rice flour, vegetable oil (coconut), date syrup, chicory root fibre, corn flour, tapioca, flaxseed flour, bicarbonate of soda), coconut flour, cocoa mass, sunflower lecithin.',
    },
    {
      id: 7,
      title: 'MYLK HAZELNUT',
      sub_title: 'Velvety Mylk Chocolate with Hazelnuts',
      description: 'A luscious and creamy plant-based chocolate mylk bar, enriched with the indulgent, nutty taste of crushed hazelnuts. This delightful fusion strikes a perfect balance between the creamy sweetness of chocolate and the earthy, slightly crunchy, and distinct flavour of hazelnuts.',
      image: '/assets/packs/hazelnut.png',
      ingredients: 'Hazelnuts (30%), organic coconut sugar, cocoa nibs (16%), coconut (13%), cocoa butter, coconut flour, sunflower lecithin.',
    },
  ]

  const handleOpen = (id) => {
    setOpen(true);
    const pack = _.find(selectedTheme.products, item => item?.id === id);
    setSelected(pack);
  }

  const handleClose = () => {
    setSelected(null);
    setOpen(false)
  }

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Grid container spacing={5}>
          {selectedTheme.products.map((card, index) => (
            card.btn_text_1 && card.btn_text_1.length !== 0 ? ( 
              <Grid onClick={() => handleOpen(card.id)} item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', alignItems: 'center', cursor: "pointer" }}>
                <m.div variants={varFade().inUp}>
                  <Image src={`${process.env.REACT_APP_HOST_API_KEY}${card.pack_illustration.data.attributes.url}`} alt={card.title} sx={{ width: '100%' }} />
                <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                    <Box sx={{
                      width: 'auto', height: '100%', textAlign: 'center', borderRadius: '50px', padding: '5px', pl: 2, pr: 2, backgroundColor: card.color }}>
                      <Typography color={theme.palette.chocolate.contrastText} sx={{ textAlign: 'center' }} variant="h6">{card.btn_text_1}</Typography>
                  </Box>
                    {card.btn_text_2 && card.btn_text_2.length !== 0 && (
                      <Box sx={{ width: 'auto', height: '100%', textAlign: 'center', borderRadius: '50px', padding: '5px', pl: 2, pr: 2, backgroundColor: card.color, marginTop: -1 }}>
                        <Typography color={theme.palette.chocolate.contrastText} sx={{ textAlign: 'center' }} variant="h6">{card.btn_text_2}</Typography>
                  </Box>
                  )}
                    <Box sx={{ width: 'auto', height: '100%', textAlign: 'center', borderRadius: '30px', padding: '5px', pl: 2, pr: 2, backgroundColor: card.color, marginTop: -1 }}>
                    <Typography color={theme.palette.chocolate.contrastText} sx={{ textAlign: 'center' }} variant="h6">{card.grams}</Typography>
                  </Box>
                </Box>
              </m.div>
            </Grid>
            ) : (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', alignItems: 'center' }}/>
            )
          ))}
        </Grid>
      </Container>
      <Ellipse />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selected && (
          <Grid container spacing={4} sx={{display: 'flex', justifyItems: "center"}}>
              <Grid item xs={12} sm={12} md={4} key={selected.id} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <Image src={`${process.env.REACT_APP_HOST_API_KEY}${selected.pack_shot.data.attributes.url}`} alt={selected.title} sx={{ width: '80%' }} />
            </Grid>
            <Grid item xs={12} sm={12} md={8} key={selected.id} sx={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
              <Typography id="modal-modal-title" variant="h3" component="h2">
                {selected.title}
              </Typography>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                {selected.sub_title}
              </Typography>
              <Typography id="modal-modal-description" variant="body1" sx={{ mt: 5 }}>
                {selected.description}
              </Typography>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
                Ingredients
              </Typography>
              <Typography id="modal-modal-description" variant="body1" >
                {selected.ingredients}
              </Typography>
            </Grid>
          </Grid>
          )}
        </Box>
      </Modal>
    </RootStyle>
  );
}
