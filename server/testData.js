const Post = require('./models/post.model');
const uuid = require('uuid');

const loadTestData = async () => {
  const data = [
    {
      id: uuid(),
      author: 'Robin of Locksley',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Guy of Gisborne',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Sheriff of Nottingham',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Marion',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Darth Vader',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Arwen Udomiel',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Legolas of Mirkwood',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Gimli son of Gloin',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Littlefinger',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Rob Stark',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'R2D2',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Optimus Prime',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Asterix',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Iron Man',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Janko Muzykant',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Peregrin Tuck',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Saruman the White',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Gandalf the Grey',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Haldir of Lorien',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    },
    {
      id: uuid(),
      author: 'Aragorn vel Strider',
      title: '10 Brilliant Small Bussiness Ideas',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started! Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?"
    },
    {
      id: uuid(),
      author: 'Spike Spiegel',
      title: 'How do I get funding for my startup?',
      content:
        " Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready? Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!"
    }
  ];

  try {
    let counter = await Post.countDocuments();
    if (counter === 0) {
      console.log('No posts. Loading data...');
      await Post.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
