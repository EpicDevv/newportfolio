/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.png';
import Partnership from 'assets/feature/partnership.png';
import Subscription from 'assets/feature/subscription.png';
import Support from 'assets/feature/support.png';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Adobe Photoshop',
    text:
      'PhotoShop is a great skill to have as a web developer because it gives me to ability to create high definition images and graphics for the websites I work on. This gives me the ability to create Logos banners and other abstract images to use on websites. ',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Visual Studio code',
    text:
      'I use Visual Studio Code because it features a lightning fast source code editor, perfect for day-to-day use. With support for hundreds of languages, VS Code helps you be instantly productive with syntax highlighting, bracket-matching, auto-indentation, box-selection, snippets, and more',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Photography',
    text:
      'I have mastered photography with DSLR cameras and this has really helped me with creating my own digital content. I have always been interested in photography and videography since a young age. This is a great skill to have when it comes to being a webmaster. I enjoy creating content for my social media and for web development communities.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Final Cut Pro',
    text:
      'I have used Final Cut Pro x for multiple years and have mastered video editing. This really helps me when it comes to Web Development because it is important to make my own content and having the right tools at your disposal sets yourself up for success. E- Commerce is a big industry in web development and being able to understand how to create quality video ads is really important.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant: 'section.feature'}} id="skills">
     <Container>
       <SectionHeader
        slogan='More About Me'
        title='Always walk through life as if you have something new to learn and you will.'
       />
       <Grid sx={styles.grid}>
         {data.map((item) => (
           <FeatureCard 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}

           />
         ))}
       </Grid>
     </Container>

   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
