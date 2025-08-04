<template>
    <div class="main container-xxl">
        <iframe :src="embedUrl" frameborder="0" allowfullscreen></iframe>
        <div class="content-wrapper">
            <h3>Explore Sri Lanka with ease in mind</h3>
        <p>When you book your holiday with us, rest assured that we will be there to assist you every step of the way, resolving any issues you may encounter, and providing unwavering support throughout your journey.</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        videoUrl: {
            type: String,
            required: true,
        },
    },
    computed: {
        embedUrl() {
            if (this.videoUrl) {
                // Extract the YouTube video ID from the URL
                const videoId = this.extractYouTubeVideoId(this.videoUrl);
                return `https://www.youtube.com/embed/${videoId}`;
            }
            return '';
        },
    },
    methods: {
        extractYouTubeVideoId(url) {
            // Regular expression to extract the video ID from the YouTube URL
            const regExp =
                /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([^\s&?]+)/i;
            const match = url.match(regExp);
            return match && match[1] ? match[1] : null;
        },
    },
};
</script>

<style scoped>
iframe {
    width: 560px;
    height: 315px;
    flex-shrink: 0;
}

.content-wrapper {
    margin-left: 50px;
}

.main {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
}

@media only screen and (max-width: 991px) {
    iframe {
        width: 400px;
        height: 300px;
    }
}

@media only screen and (max-width: 767px) {

    .content-wrapper{
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }

    iframe {
        width: 100%;
        height: 500px;
    }

    .main{
        display: block;
        margin-bottom: 0;
    }
}

@media only screen and (max-width: 575px) {
    iframe {
        width: 100%;
        height: 300px;
    }
}
</style>
  