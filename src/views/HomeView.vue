<script>
import homeMusic from '../musics/homeMusic.mp3'
export default {
    data() {
        return {
            song: homeMusic,
            dataRandom: {
                num50: 1,
                num20: 2,
                num10: 3,
                userNum: 6
            }
        }
    },
    methods: {
        handleSubmit() {
            const data = JSON.parse(JSON.stringify(this.dataRandom))
            if (this.checkValidate(data)) {
                this.$store.commit('RandomData/setRandomData', data)
                this.$router.push('/random-page')
            }
        },
        checkValidate(data) {
            return true
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$store.commit('songs/setSong', { url: homeMusic, isPlay: false })
        })
    }
}
</script>
<template>
    <main>
        <div class="home-wrapper">
            <div class="bg-home">
                <img src="../assets/images/home_bg.png" class="home-img" alt="home img">
            </div>
            <h1 class="title">Enter info and Submit!</h1>
            <form action="#" @submit.prevent="handleSubmit" class="form" ref="dataRandomRef">
                <div class="flower1"><img src="../assets/images/hoa_dao.png" alt="hoa dao"></div>
                <div class="flower2"><img src="../assets/images/hoa_mai.png" alt="hoa mai"></div>
                <div class="flower3"><img src="../assets/images/hoa_mai.png" alt="hoa mai"></div>
                <div class="form-group">
                    <label for="num50" class="form-label">50000</label>
                    <input type="text" name="num50" id="num50" v-model="dataRandom.num50">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="num20" class="form-label">20000</label>
                    <input type="text" name="num20" id="num20" v-model="dataRandom.num20">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="num10" class="form-label">10000</label>
                    <input type="text" name="num10" id="num10" v-model="dataRandom.num10">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                    <label for="numUsers" class="form-label">Players</label>
                    <input type="text" name="numUsers" id="numUsers" v-model="dataRandom.userNum">
                    <span class="form-message"></span>
                </div>
                <button class="custom-cursor-hover submit">Submit😜</button>
            </form>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.home-wrapper {
    width: 100%;
    height: 100vh;

    .flower1 {
        position: absolute;
        top: calc(50% - 100px);
        left: calc(50% + 185px);
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        animation: flowDown 4s ease-in-out forwards;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .flower2 {
        position: absolute;
        top: calc(50% - 88px);
        left: calc(50% + 175px);
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        animation: flowDown 6s ease-in-out forwards;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .flower3 {
        position: absolute;
        top: calc(50% - 260px);
        left: calc(50% - 190px);
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        animation: flowDown3 2s ease-in-out forwards;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .title {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        width: 360px;
        text-align: center;
        left: 50%;
        top: 10%;
        position: absolute;
        transform: translate(-50%, 0%);
        text-shadow: 0 0 8px #fff, 0 0 16px rgb(202, 202, 202), 0 0 24px rgb(136, 136, 136);
    }
}

.bg-home {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.4;
    }
}


.form {
    cursor: url('../assets/images/cursor_medium.png') 50% 50%, auto;
    width: 360px;
    min-height: 100px;
    padding: 32px 24px;
    text-align: center;
    background: #fff;
    border-radius: 2px;
    align-self: center;
    box-shadow: 0 2px 5px 0 rgba(51, 62, 73, .5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #fff, 0 0 20px rgb(151, 151, 151), 0 0 30px rgb(97, 97, 97);

    input {
        outline: none;
        border: 1px solid #04291e;
    }

    .submit {
        width: 100%;
        height: 26px;
        text-align: center;
        border: 1px solid #d90429;
        font-weight: bold;
        transition: .4s;
        text-transform: uppercase;
        outline: none;
        background-color: unset;

        &:hover {
            letter-spacing: 8px;
        }
    }

    .form-group {
        display: flex;
        margin-bottom: 16px;
        flex-direction: column;
    }

    .form-label,
    .form-message {
        text-align: left;
    }

    .form-label {
        font-weight: 700;
        padding-bottom: 6px;
        line-height: 1.8rem;
        font-size: 1.4rem;
    }

    .form-control {
        height: 40px;
        padding: 8px 12px;
        border: 1px solid #b3b3b3;
        border-radius: 3px;
        outline: none;
        font-size: 1.4rem;
    }

    .form-control:hover {
        border-color: #1dbfaf;
    }

    .form-group.invalid .form-control {
        border-color: #f33a58;
    }

    .form-group.invalid .form-message {
        color: #f33a58;
    }

    .form-message {
        font-size: 1.2rem;
        line-height: 1.6rem;
        padding: 4px 0 0;
    }

    .form-submit {
        outline: none;
        background-color: #1dbfaf;
        margin-top: 12px;
        padding: 12px 16px;
        font-weight: 600;
        color: #fff;
        border: none;
        width: 100%;
        font-size: 14px;
        border-radius: 8px;
    }

    .form-submit:hover {
        background-color: #1ac7b6;
    }
}

@keyframes flowDown {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }

    70% {
        opacity: 1;
    }

    100% {
        transform: translate(0, 270px);
    }
}

@keyframes flowDown3 {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }

    70% {
        opacity: 1;
    }

    100% {
        transform: translate(0, 50px);
    }
}
</style>