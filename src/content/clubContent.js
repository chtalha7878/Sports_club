import cricketImage from '../assets/cricket-ai.png';
import footballImage from '../assets/football-ai.png';
import heroSportsImage from '../assets/hero-sports-ai.png';
import hockeyImage from '../assets/hockey-ai.png';

export const clubContent = {
  hero: {
    title: 'One Club. Many Dreams. Stronger Together.',
    subtitle: 'Building a vibrant sports community in the UAE through training, teamwork, and fair competition.',
    image: heroSportsImage,
    images: [
      {
        src: cricketImage,
        alt: 'Cricket player batting outdoors',
      },
      {
        src: hockeyImage,
        alt: 'Field hockey players competing on turf',
      },
      {
        src: footballImage,
        alt: 'Football players on a pitch',
      },
    ],
  },
  about: {
    copy:
      'UAE Lions Sports Club is a community-focused sports club in the UAE, welcoming players of different ages and skill levels. Our programs encourage disciplined training, fitness, teamwork, sportsmanship, and fair competition while creating opportunities for players to develop confidence on and off the field.',
    values: [
      {
        title: 'Community First',
        text: 'A welcoming environment for athletes, families, coaches, and supporters.',
      },
      {
        title: 'Excellence in Training',
        text: 'Structured sessions that help players improve skills, fitness, and game awareness.',
      },
      {
        title: 'Respect and Discipline',
        text: 'Sportsmanship, teamwork, and fair play are central to every program.',
      },
    ],
  },
  sports: [
    {
      name: 'Cricket',
      description: 'Skill-focused cricket training for batting, bowling, fielding, match awareness, and team play.',
      image: cricketImage,
    },
    {
      name: 'Hockey',
      description: 'Fast, technical hockey sessions built around control, passing, movement, teamwork, and confidence.',
      image: hockeyImage,
    },
    {
      name: 'Football',
      description: 'Football training for fitness, ball mastery, positioning, communication, and competitive match play.',
      image: footballImage,
    },
  ],
  events: {
    description:
      'The club runs regular training sessions, friendly matches, tournaments, and seasonal events. This section is prepared so future admins can update schedules, add new events, and keep members informed without changing the website code.',
    items: [
      {
        title: 'Weekly Training',
        text: 'Organized coaching sessions across cricket, hockey, and football.',
      },
      {
        title: 'Friendly Matches',
        text: 'Community match days that help players gain experience in a positive setting.',
      },
      {
        title: 'Club Tournaments',
        text: 'Future competitions and event details can be added by the admin team.',
      },
    ],
  },
  contact: {
    phone: '00971542797709',
    email: 'sohail@uaeloins.com',
    location: 'UAE Loins Sports Club, Al Warqa 4 Dubai, United Arab Emirates',
  },
};
