
export const getPageData = (pageId) => {
  return pageData.find(d => d.id === pageId)
}

const pageData = [
  {
    id: 1,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'A friend of Kanonerskiy',
    text: 'Next to the port office you can see a stone sculpture of a "humanized" cat. He dressed in trousers, a shirt, a cap, boots, and a kerchief on its neck. He is a sort of "yard boy". Previously, the Kanonerskiy island belonged to Finland. It was called Kissasaary. It means "Cat Island" in Finnish. Now the cat reminds us about the island past. Unfortunately the cat still does not have a name. The locals call him just like a cat on a stone. How would you call the dandy in a cap?',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 2,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'Defender',
    text: 'The Western part of the Kanonerskiy island, facing the Neva Bay, has never been fortified or protected. Here it is a shallow area, which is part of the Nevsky bar.  On this shore there was a battery with a powder, ammunition depot. In the first half of the XVIII century the island was controlled by the Admiralty Board. The Island transformed into an educational center. Naval gunners started studding the firing skill. The place got a new name `Kanoner-skiy Island` in the French manner. That means `Cannoner Island`.Look into the distance. Breathe and dream. Imagine the thunder of the powerful cannons. What the emotions does the place now?',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 3,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'Lollypop',
    text: 'In the middle of the beach you see the object that has never been used as intended. There is a pipe. It is great and alone. It was built in 1980 as a part of an unfinished thermal power plant. It is a reminder about human ambition and an example of urban style. We suggest you to think on the item “How can we name the pipe? Do we have to save the pipe? How can we use the pipe?”',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 4,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'A gate to Europe',
    text: 'The shape of the island has changed many times both under the influence of natural phenomenons and as a result of human-made processes. In the end of 19th century, the configuration of the island has changed significantly. In particular, the territory in the North and the South became longer, a river Batareyka was filled and a part of the Kanonevsky territory went to the Gutuevsky Island. Now you stay in front of the Sea canal that was laid in 1875-1885. The sea canal is an artificial waterway in the Neva Bay extending from the estuary of the Bolshaya Neva river to the Kotlin island. It was designed to allow the ships to get to the seaport of St. Petersburg. Just imagine! It is almost 30 kilometers of waterway with greatest depth in 14 meters. It is deserved to be named. We allow you to discuss on this topic.',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 5,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'The round island',
    text: 'On the opposite site of the canal you see another island. It is connected with the Kanonerskiy island with an underwater tonal that was opened in 1983. Its name is the Gutuevsky Island. The name comes from the owner of the island. His name is Konon Gutuev. He belong to the merchant class. The island is famous by its sea port and Church Of The Epiphany. Have you ever been to Gutuevsky before?',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 6,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'White island',
    text: 'Wastewater treatment plant of St. Petersburg is located on an artificial island. It is the oldest system of treatment facilities in the city, accepts domestic, industrial and surface waste water. The first part of the station began to work in 1978 and now it works observing the standards of the Helsinki Commission.',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 7,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'Kanonersky Shipyard',
    text: 'Kanonersky Shipyard was built in the 1880s simultaneously with Morskoy canal. In 1930 the dock with 2 sections appeared. It can carry up to 4 tons of load.During the war the shipyard was rebuilt for military needs. On the territory of the shipyard there is a monument to workers who fell during the WWII.',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 8,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'OK-line',
    text: 'There is the so-called “OK-line”. On the left side of this building you can see abandoned flats, but on the right side there is residential apartments that are used even to this day.Do you think, is it really OK to live here, or it is too noisy?',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 9,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'H. 17',
    text: 'Look at this abandoned building. It is too noisy to live here. Despite this you can use this building somehow. For example, you can make a post-apocalyptic movie or commemorate your cat. What are your suggestions how to use this place?',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 10,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'The Bridge',
    text: 'Now you are standing almost below the huge Western High-Speed Diameter of St. Petersburg (ZSD). First some facts: The motorway was built between 2008 - 2016 and cost 210 billion rubles. It is possible for car drivers to cross the city in less than 20 minutes when using this 47-kilometres road.  But there are also some problems at this place, caused by the motorway`s noise and dust. To reduce the noise, authorities already built a second floor and a noise-protection wall on the motorway. But noise measurements still show significant violations of the allowed amount of noise at residential places. In addition, there are sometimes things falling down from the road. By now, a few buildings are abandoned because living there is not healthy anymore. To care about the residents of Kanoniersky Island, there is currently the suggestion of a new protection against the noise. Do you like this idea? What do you think about living near the bridge?',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
  {
    id: 11,
    imageUrl: './resources/DSC_7859.jpg',
    title: 'Everlasting memory',
    text: '',
    hint: 'This is a hint. To find the next spot, turn around three times and spit on the floor and so on ...',
    mapsLink: 'http://maps.google.com'
  },
]
