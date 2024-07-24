import qs from 'qs';

export const mainMenuQuery = qs.stringify({
  populate: {
    topnav: {
      populate: {
        logolink:{
          populate:{
            image:{
              fields:['url','alternativeText','width','height']
            },
          },
        },
        link: {
          populate:{
            children:{
              populate:{
                link: true
              }
            }
          }
        },
        button:true
      }
    }
  }

});
