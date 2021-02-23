import React  from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';

const data = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at
            sodales purus euismod.`,
            `The Fastest Way to Learn React vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `The Fastest Way to Learn React nec lectus urna. Sed sodales ultrices dapibus.
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at
            sodales purus euismod.`,
            `How to Build a Node Server in 10 Minutesvel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `How to Build a Node Server in 10 Minutesnec lectus urna. Sed sodales ultrices dapibus.
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },     {
        name: 'learn-redux',
        title: 'Proper way structure and organize ',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at
            sodales purus euismod.`,
            `Proper way structure and organize vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Proper way structure and organize nec lectus urna. Sed sodales ultrices dapibus.
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
      }
    ]
const Articles = () => <ArticleList articles = {data} />

export default Articles;
