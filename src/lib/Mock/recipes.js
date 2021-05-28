import PeachSmash from '../../assets/images/Rectangle87.png';
import PistacioPesto from '../../assets/images/Rectangle88.png';
import SesameCrustedTofu from '../../assets/images/Rectangle89.png';
import MexicanCorn from '../../assets/images/Rectangle90.png';
import Carbonara from '../../assets/images/Rectangle91.png';
import BananaBread from '../../assets/images/Rectangle92.png';

const recipeMock = [
  {
    id: 1,
    imageUrl: PeachSmash,
    imageAlt: 'Peach smash',
    title: 'Peach Smash',
    ingridients: '6 INGRIDIENTS',
    steps: '4 STEPS',
    prepTime: '5MIN',
    isFavourite: true,
    isFeatured: true,
  },
  {
    id: 2,
    imageUrl: PistacioPesto,
    imageAlt: 'Pistachio Pesto Babka',
    title: 'Pistachio Pesto Babka',
    ingridients: '17 INGRIDIENTS',
    steps: '17 STEPS',
    prepTime: '3HR 35MIN',
    isFavourite: false,
    isFeatured: true,
  },
  {
    id: 3,
    imageUrl: SesameCrustedTofu,
    imageAlt: 'Sesame Crusted Tofu',
    title: 'Sesame Crusted Tofu',
    ingridients: '15 INGRIDIENTS',
    steps: '14 STEPS',
    prepTime: '45MIN',
    isFavourite: false,
    isFeatured: true,
  },
  {
    id: 4,
    imageUrl: MexicanCorn,
    imageAlt: 'Mexican Street Corn',
    title: 'Mexican Street Corn',
    ingridients: '7 INGRIDIENTS',
    steps: '5 STEPS',
    prepTime: '25MIN',
    isFavourite: false,
    isFeatured: true,
  },
  {
    id: 5,
    imageUrl: Carbonara,
    imageAlt: 'Weeknight Carbonara',
    title: 'Weeknight Carbonara',
    ingridients: '7 INGRIDIENTS',
    steps: '10 STEPS',
    prepTime: '25MIN',
    isFavourite: true,
    isFeatured: true,
  },
  {
    id: 6,
    imageUrl: BananaBread,
    imageAlt: 'Banana Bread',
    title: 'Banana Bread',
    ingridients: '8 INGRIDIENTS',
    steps: '7 STEPS',
    prepTime: '52 MIN',
    isFavourite: true,
    isFeatured: true,
  },
];

const ingridientsMock = [
  {
    id: 6,
    imageUrl: BananaBread,
    imageAlt: 'Banana Bread',
    servings: '6',
    firstIngridient: 'Bananas, divided',
    firstIngridientQuant: '3',
    secondIngridient: 'Egg',
    secondIngridientQuant: '1',
    thirdIngridient: 'Butter',
    thirdIngridientQuant: '3 Tbs',
    fourthIngridient: 'All - Purpose Flour',
    fourthIngridientQuant: '1 cup',
    fifthIngridient: 'Granulated Sugar',
    fifthIngridientQuant: '1/4 cup',
    sixthIngridient: 'Salt',
    sixthIngridientQuant: '1 pinch',
    seventhIngridient: 'Baking Soda',
    seventhIngridientQuant: '1 Tsp',
  },
];

const stepsMock = [
  {
    id: 6,
    stepOne: 'Step 1',
    stepOneDesc:
      ' Peel the Banana (3). Mash 2 1/2 bananas with a fork in a bowl and set the other half aside. ',
    stepTwo: 'Step  2',
    stepTwoDesc:
      ' Add Butter (40 gram) and Egg (1) to mashed bananas and mix well together. ',
    stepThree: 'Step  3',
    stepThreeDesc:
      'In a separate bowl, mix the All-Purpose Flour (140 gram), Granulated Sugar (50 gram), Salt (1 pinch), and Baking Soda (1 teaspoon) together. ',
    stepFour: 'Step  4',
    stepFourDesc:
      'Add the dry ingredients to the mashed banana mixture. Using a fork or spatula, mash all ingredients into a wet banana batter. ',
    stepFive: 'Step  5',
    stepFiveDesc:
      'Add Butter (10 gram) to the bottom and sides of the Philips baking accessory and then dust it with a bit of flour. Pour the banana bread batter into the baking accessory. Slice the leftover banana in half lengthwise and place both halves on top of the banana bread. ',
    stepSix: 'Step  6',
    stepSixDesc:
      'Place the baking accessory in the basket. Put the basket into the Airfryer. Cook at 325 degrees F (160 degrees C) for 40 minutes. ',
    /* stepSeven: "Step  7",
    stepSevenDesc:
      "In a separate bowl, mix the All-Purpose Flour (140 gram), Granulated Sugar (50 gram), Salt (1 pinch), and Baking Soda (1 teaspoon) together. ", */
  },
];

export { recipeMock, ingridientsMock, stepsMock };
