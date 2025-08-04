<template>
    <div>
        <Navi />
        <div class="main">
            <h1>Oops!<br><span>404 - PAGE NOT FOUND</span></h1><br>
            <p>The page you are looking for might have been removed had its name changed or is temporaily unavailable</p>
            <button @click="this.$router.push('/')">HOME</button>
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'

export default {
    components: {
        Navi,
    }
}
</script>
<style scoped>
    .main{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button{
        width: 100px;
        height: 45px;
        border: none;
        border-radius: 10px;
        background-color: transparent;
        border: 4px solid #EB1221;
        color: #EB1221;
        transition: all .3s ease;
    }

    button:hover{
        border: 4px solid black;
        color: black;
    }
    
    h1{
        font-size: 100px;
        text-align: center;
        color: #EB1221;
        line-height: 50px;
    }

    h1 span{
        font-size: 30px;
        color: black;
    }

    p{
        max-width: 500px;
        text-align: center;
    }
</style>