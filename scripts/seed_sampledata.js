const models = require('../src/models/db')

async function seed () {
  try {
    await models.db.sync()

    await models.User.bulkCreate([
      { username: 'firstuser', password: 'firstpass' },
      { username: 'seconduser', password: 'secondpass' }
    ])

    await models.Recepie.bulkCreate([
      {
        name: 'Potato Puff ',
        type:'veg',
        ingredients: `
                    Potato ½ kg,
                    All purpose flour 2 tbsp,
                    Bread crumbs 6 tsp,
                    Salt and black pepper to taste,
                    Oil for deep fry
                    `,
        recepie:`
                1. Peel and grate the potato.
                2.Mix all purpose flour, bread crumbs, salt and black pepper.
                3.Heat oil in a wok and deep fry like fritters until golden.
                4.Serve with ketchup.
                `,
        img: `https://images.media-allrecipes.com/userphotos/720x405/5877533.jpg`
      },
      {
        name: 'Tulsi ki Chutney',
        type:'veg',
        ingredients: `
                       Basil leaves 1 cup,
                       Green chilies 6,
                       Garlic cloves 6,
                       Cumin seeds (roasted) 2 tsp,
                       Whole coriander (roasted) 2 tsp,
                       Green coriander ½ bunch,
                       Tamarind Ppulp 1 cup,
                       Salt ½ tsp
                       `,
        recepie: `
               1.In a blender, blend basil leaves, green chilies, garlic cloves, roasted cumin seeds, roasted whole coriander, coriander leaves, tamarind pulp and salt until smooth.
               2.Chutney is ready.
                `,
        img:`https://m.tarladalal.com/members/9306/big/big_green_chutney__(__faraal_recipe)-10131.jpg`
      },
      {
        name: 'Mutton Lababdar',
        type:'non veg',
        ingredients: `
    Mutton 1/2 kg,
    Onion 2 (chopped),
    Ginger garlic paste 2 tbsp,
    Salt 1 tsp (heaped),
    Turmeric 1/2 tsp,
    Coriander powder 1 ½ tsp,
    Chili powder 2 ½ tsp,
    Black pepper 1 tsp (crushed),
    Cumin 1 tsp (roasted and crushed),
    Yoghurt 1 cup,
    Kasuri meethi 1 tsp (heaped),
    Oil ½ cup,
    Garam masala powder 1 tsp,
    Coriander 2 tbsp (chopped),
    Green chilies 2 (chopped)
      `,
          recepie:`
          1.Add mutton, onion, ginger garlic paste, salt, turmeric, coriander powder, chili powder, black pepper, cumin, and yogurt in a cooking pan along 1 cup water.
          2.Cover and cook on slow heat until mutton tender.
          3.Now add kasuri meethi and oil and stir fry on high heat until oil comes on top.
          4.Add 1 cup water to make a thick gravy. Cook on slow heat for 5 minutes.
          5.Sprinkle garam masala powder, chopped coriander and green chilies. Remove from heat and serve.
          `,
          img:`https://img-global.cpcdn.com/recipes/57f2956a126e1f9f/1502x1064cq70/mutton-lababdar-recipe-main-photo.jpg`
      },
    ])

    await models.Comment.bulkCreate([
      {
        title: 'nice recepie',
        message: 'really nice written recepie, thanks!',
        userId:1,
        recepieTbId:3
      },
      {
        title: 'good recepie',
        message: `o take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses `,
        userId:1,
        recepieTbId:1
      },
      {
        title: 'could be better',
        message: `, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh`,
        userId:2,
        recepieTbId: 2
      },
      {
        title: 'thanks for writing this',
        message: `hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain `,
        userId:1,
        recepieTbId:1
      },
      {
        title: 'did not like your recepie',
        message: `pedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt`,
        userId:2,
        recepieTbId:2
      },
      {
        title: 'really bad recepie',
        message: `ure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and `,
        userId:2,
        recepieTbId:3
      }
    ])
  } catch (e) {
    throw e
  }
}

seed()
