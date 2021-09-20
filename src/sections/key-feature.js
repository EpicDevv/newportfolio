/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.png';
import Partnership from 'assets/key-feature/partnership.png';
import Subscription from 'assets/key-feature/subscription.png';
import Support from 'assets/key-feature/support.png';
import FireBase from 'assets/key-feature/firebase.png';
import TypeScript from 'assets/key-feature/typescript.png';
import Git from 'assets/key-feature/git.png';
import Rest from 'assets/key-feature/rest.png'

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Redux',
    text:
      'Redux allows you to manage your app\'s state in a single place and keep changes in your app more predictable and traceable. It makes it easier to reason about changes occurring in your app.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Node.js',
    text:
      'Node.js is easily one of the biggest sweethearts of backend development. Its widely used especially in the U.S. in the start-up kingdom of Silicon Valley. It’s no wonder that over 175,398 web apps (some of them being THE biggest players on the market) already put Node.js on their backend.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Next.js',
    text:
    'Next.js is a framework born in heaven. It is best for SEO E-Commerce Web Apps. Caching and automatic static optimization built in. Fully server-rendered pages, 100% React support, Lambda function support (API routes), Fine tweak your webpack/babel config if needed, It abstracts away all those performance and development setups you need with a typical React app and allows you to focus only on what matters – your business logic code.'
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'React.js',
    text:
      'Today, ReactJS has become highly popular because of its extra simplicity and flexibility. Many people are even referring to it as the future of web development. It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS.',
  },
  {
    id: 5,
    imgSrc: FireBase,
    altText: 'Customer Support',
    title: 'FireBase',
    text:
      'With Firebase, you can focus your time and attention on developing the best app(s) possible for your business. Since the operations and internal functions are so solid, and taken care of by the Firebase interface, you can spend more time developing the high quality app that users are going to want to use',
  },
  {
    id: 6,
    imgSrc: TypeScript,
    altText: 'Customer Support',
    title: 'TypeScript',
    text:
      'TypeScript is a smart choice when writing a modern web- or JavaScript-based application. TypeScript’s carefully considered language features and functionality, and its consistently improving tools result in a terrifically productive development experience.',
  },
  {
    id: 7,
    imgSrc: Git,
    altText: 'Customer Support',
    title: 'Git',
    text:
      'Why Is Version Control Important? Version control is important to keep track of changes — and keep every team member working off the latest version. You should use version control software for all code, files, and assets that multiple team members will collaborate on.',
  },
  {
    id: 8,
    imgSrc: Rest,
    altText: 'Customer Support',
    title: 'Rest Api',
    text:
      'REST stands for representational state transfer. Basically, it’s an architectural style for designing networked applications. REST relies on a stateless, client-server protocol and in almost all cases it’s going to be HTTP. Initially, programmers were relying on SOAP to implement the API in web services but in recent years REST has becomes the choice of programmers due to its simplicity and scalability. ',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: "section.keyFeature"}} id="tech">
     <Container>
       <SectionHeader
     
        slogan="React.js / Next.js Developer"
        title="Following Technological Trends of the Future!"
       />
       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
