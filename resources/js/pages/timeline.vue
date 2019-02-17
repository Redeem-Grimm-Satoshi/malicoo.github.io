<template>
    <div>
        <nav-bar />
        <div class="container my-2">
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin">Reality is just a matter of perception.</h1>
                <h2 class="font-thin text-sm tracking-wide mt-2 mb-4">Those events and important moments my life.</h2>
            </div>
        </div>
        <div class="container">
            <div class="flex justify-center">
                <light-timeline :items="items">
                    <template slot="symbol" slot-scope="{ item }">
                        <span :uk-icon="'icon: ' + item.symbol" :style="'color:'+item.color"></span>
                    </template>
                    <template slot='content' slot-scope="{ item }">
                        <div uk-scrollspy="cls: uk-animation-slide-right-small;">
                            <p>
                                {{ item.content }}
                            </p>
                            <p class="text-light mt-2" v-if="item.desc">
                                {{ item.desc }}
                            </p>
                        </div>
                    </template>
                </light-timeline>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    head: {
        title: {
            inner: 'It will be a pleasure'
        },
    },

    data() {
        return {
            items: [

                {
                    tag: 'April 1999',
                    content: 'Born',
                    symbol: "play",
                    color: 'red'
                },

                {
                    tag: 'September 2001',
                    color: 'primary',
                    desc: 'Started School at CS Elak Oku',
                    symbol: 'bookmark',
                    content: 'Start Primary Education',
                },

                {
                    tag: 'June 2007',
                    desc: 'Was tired of running around the bushes',
                    symbol: 'location',
                    content: 'Moved to Bambili',
                },

                {
                    tag: 'July 2009',
                    desc: 'Top of my class.',
                    symbol: 'bolt',
                    content: 'Ended Primary Education',
                },

                {
                    tag: 'January 2014',
                    desc: 'Was forced to but ... ',
                    symbol: 'code',
                    content: 'Hello World Program',
                },

                {
                    tag: 'June 2014',
                    desc: 'Ordinary Level Certificate',
                    symbol: 'bolt',
                    content: 'Graduated from Secondary School',
                },
                {
                    tag: 'July 2015',
                    color: '#00acee',
                    desc: "I've been tweeting ever Since",
                    symbol: 'twitter',
                    content: 'First time on Twitter',
                },

                {
                    tag: 'December 2016',
                    desc: 'Felt in Love with Code. Almost failed G',
                    symbol: 'heart',
                    color: '#B50056',
                    content: 'Malico X Code',
                },

                {
                    tag: 'June 2016',
                    desc: 'Advanced Level Certificate',
                    symbol: 'bolt',
                    content: 'Graduated from High School',
                },
                {
                    tag: 'December 2018',
                    desc: 'Excited',
                    symbol: 'bookmark',
                    content: 'Started Job at MECITECH',
                }
            ]
        }
    },
}

</script>
