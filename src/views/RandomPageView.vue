<script>
import { PopupItem } from '../popups/index.js'
import { mapGetters } from 'vuex'
import { image1, image2, image3, image4, image5 } from '../assets/images/index'
export default {
    data() {
        return {
            closeFlag: false,
            lstRender: [],
            indexRemove: null,
            listText: [
                'Tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin!!',
                'Năm mới chúc nhau sức khỏe nhiều. Bạc tiền rủng rỉnh thoải mái tiêu. Happy New Year 2023!',
                'Năm mới, công việc như ý, giàu sang phú quý.',
                'Chúc Tết đến trăm điều như ý - Mừng xuân sang vạn sự thành công.',
                'Vạn sự như ý, an khang thịnh vượng.',
                'Thuận buồm xuôi gió, bình an vô sự.',
                'Làm ăn phát tài, vạn sự đại cát.',
                'Năm mới lại đến chúc đồng nghiệp vừa sang, hạnh phúc thênh thang, ý chí vững vàng, niềm vui rộn ràng, tiền bạc lai láng, sức khỏe cường tráng, năm mới vẻ vang, giữ mãi an khang, giữ tràn lộc phúc, kính chúc kính chúc.'
                , 'Năm mới đến, chúc team mình làm đâu thắng đó, sự nghiệp cùng lên như gió.',
                'Chúc mọi người năm mới dẻo dai, công việc thuận lợi, tiền đầy túi, tình đầy tim.',
                'Năm mới công việc ùn ùn tới, đồng nghiệp ta luôn phơi phới.',
                'Đầu xuân năm mới, chúc anh chị em đồng nghiệp luôn có "4 chữ lắm": lắm tiền, lắm sức khỏe, lắm thành công, lắm may mắn.',
                'Xuân sang năm mới đến, chúc các chị lúc nào cũng xinh, các anh rủng rỉnh, các em job tới linh đình.',
                'Năm Dần, chúc đồng nghiệp kiếm "sương sương" tiền tỷ, lúc nào cũng vui như có hỷ.',
            ],
            listPath: [
                image1, image2, image3, image4, image5
            ],
            dataShowUsers: {
                num10: 0, num20: 0, num50: 0, numUsers: 0, num10Remaining: 0, num20Remaining: 0, num50Remaining: 0
            }
        }
    },
    components: {
        PopupItem
    },
    created() {
        this.showPopup = this.$store.state.RandomData.dataPopup.isShow
        const num10 = this.$store.state.RandomData.dataRandom.num10
        const num20 = this.$store.state.RandomData.dataRandom.num20
        const num50 = this.$store.state.RandomData.dataRandom.num50
        const num10Remaining = this.$store.state.RandomData.dataRandom.num10
        const num20Remaining = this.$store.state.RandomData.dataRandom.num20
        const num50Remaining = this.$store.state.RandomData.dataRandom.num50
        const numUsers = this.$store.state.RandomData.dataRandom.userNum
        this.dataShowUsers = { ...this.dataShowUsers, num10, num20, num50, numUsers, num10Remaining, num20Remaining, num50Remaining }
        const lstTemp = this.handleDataRandomFromVueX()
        this.randomList(lstTemp)
    },
    methods: {
        setShowPopup(item) {
            this.$store.commit('RandomData/setDataPopup', { isShow: true, value: item.value, id: item.id, text: item.text, path: item.path })
        },
        handleClose(indexRemove) {
            this.closeFlag = true
            this.indexRemove = indexRemove
            this.$store.commit('RandomData/setDataPopup', { isShow: false, value: '', id: '', text: '', path: '' })
        },
        handleDataRandomFromVueX() {
            const data = this.$store.state.RandomData.dataRandom
            let lstTemp = []
            let id = 0
            if (data.num50 > 0) {
                for (let i = 0; i < data.num50; i++) {
                    lstTemp.push({ id: id, value: 50000 })
                    id++
                }
            }
            if (data.num20 > 0) {
                for (let i = 0; i < data.num20; i++) {
                    lstTemp.push({ id: id, value: 20000 })
                    id++
                }
            }
            if (data.num10 > 0) {
                for (let i = 0; i < data.num10; i++) {
                    lstTemp.push({ id: id, value: 10000 })
                    id++
                }
            }
            if(lstTemp.length>0){
                let i = 0;
                let j = 0;
                let k = 0;
                do {
                    lstTemp[i].text = this.listText[j]
                    lstTemp[i].path = this.listPath[k]
                    i++;
                    j++;
                    k++;
                    if (j === this.listText.length) {
                        j = 0
                    }
                    if (k === this.listPath.length) {
                        k = 0
                    }
                } while (i < lstTemp.length)
                return JSON.parse(JSON.stringify(lstTemp))
            }
            return []
        },
        randomList(listRandom) {
            this.lstRender = []
            while (listRandom.length > 0) {
                const randomIndex = Math.floor(Math.random() * listRandom.length);
                this.lstRender.push(listRandom[randomIndex])
                listRandom.splice(randomIndex, 1)
            }

        },
        handleRandom() {
            if (this.closeFlag) {
                const idRemove = this.lstRender.find(item => item.id === this.indexRemove)
                this.lstRender.splice(this.lstRender.indexOf(idRemove), 1)
                this.closeFlag = false
            }
            let lstTemp = [];
            if (this.lstRender.length > 0) {
                lstTemp = JSON.parse(JSON.stringify(this.lstRender))

            } else {
                lstTemp = this.handleDataRandomFromVueX()
            }
            this.randomList(JSON.parse(JSON.stringify(lstTemp)))
            let num10Remaining = 0;
            let num20Remaining = 0;
            let num50Remaining = 0;
            for (let i = 0; i < lstTemp.length; i++) {
                if (lstTemp[i].value === 10000) {
                    num10Remaining += 1;
                }
                if (lstTemp[i].value === 20000) {
                    num20Remaining += 1;
                }
                if (lstTemp[i].value === 50000) {
                    num50Remaining += 1;
                }
            }
            this.dataShowUsers = { ...this.dataShowUsers, num10Remaining, num20Remaining, num50Remaining }
        },
        redirectToHome(){
            this.$router.replace({ path: '/' })
        }
    },
    computed: {
        ...mapGetters({
            dataPopup:
                'RandomData/getShowPopup',
        })
    },
    mounted() {
        this.$nextTick(() => {
            document.querySelector("body").addEventListener('mousemove', (event) => {
                const eyes = document.querySelectorAll(".eye");
                if (eyes.length > 0) {
                    eyes.forEach((eye) => {
                        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
                        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2)
                        let radian = Math.atan2(event.pageX - x, event.pageY - y);
                        let rot = (radian * (180 / Math.PI) * -1) + 270;
                        eye.style.transform = `rotate(${rot}deg)`

                    })
                }
            })
        })
    }
}
</script>
        width:100%;
<template>
    <main>
        <div class="tet-wrap-content custom-cursor">
            <img class="png-bg" src="../assets/images/bg.png" width="100%" height="100%" alt="bg4">
            <div class="title">Click on item to receive gifts</div>
            <div class="firework">
                <div class="fire"><img src="../assets/images/firework.gif" width="100%" height="100%" alt="fire"></div>
                <div class="line"><img src="../assets/images/firework_line.gif" width="100%" height="100%" alt="line">
                </div>
            </div>
            <div class="tet-items">
                <div v-for="item in lstRender" :key="item.id" class="tet-item custom-cursor-hover"
                    @click="setShowPopup(item)">
                    <h1 class="tet-header">Item name({{ item.id }})</h1>
                    <div class="tet-body">{{ closeFlag&& this.indexRemove === item.id ? item.value : '' }}</div>
                    <div class="tet-footer">{{ item.text }}</div>
                    <img class="item-img" :src="item.path" alt="">
                </div>
                <div class="no-item custom-cursor-hover" v-if="lstRender.length<=0" @click="redirectToHome">No items chose!, click here to redirect to home!!!</div>
            </div>
            <div class="show-data">
                <div class="text-yellow-light">{{ `Players: ${dataShowUsers.numUsers}`}} </div>
                <div class="text-yellow-light" :bind="dataShowUsers.num50Remaining">{{ `50000: ${dataShowUsers.num50},
                remaining: ${dataShowUsers.num50Remaining}`}} </div>
                <div class="text-yellow-light" :bind="dataShowUsers.num20Remaining">{{ `20000: ${dataShowUsers.num20},
                remaining: ${dataShowUsers.num20Remaining}`}} </div>
                <div class="text-yellow-light" :bind="dataShowUsers.num10Remaining">{{ `10000: ${dataShowUsers.num10},
                remaining: ${dataShowUsers.num10Remaining}`}} </div>
            </div>
            <div class="cat">
                <div class="heart1"><img width="100%" height="100%" src="../assets/images/heart.png" alt="heart 1">
                </div>
                <div class="heart2"><img width="100%" height="100%" src="../assets/images/heart.png" alt="heart 2">
                </div>
                <img src="../assets/images/cat.png" alt="cat">
            </div>
            <div class="long_den">
                <img src="../assets/images/den_long.png" alt="long den">
            </div>
            <div class="circle-rotate">
                <img src="../assets/images/circle_rotate.png" alt="circle rotate">
            </div>
            <div class="circle-rotate-opposite">
                <img src="../assets/images/circle_item.png" alt="circle item">
            </div>
            <div class="year">
                <img src="../assets/images/year.png" alt="year">
            </div>
            <div class="than_tai_1">
                <img src="../assets/images/than_tai_1.png" alt="than tai 1">
            </div>
            <div class="than_tai_2">
                <div class="img-wrap">
                    <div class="than_tai_2_text">
                        S C R W FE Team
                    </div>
                    <img src="../assets/images/than_tai_2.png" alt="than tai 2">
                </div>
            </div>
            <div class="cloud1">
                <img src="../assets/images/cloud.png" alt="cloud1">
            </div>
            <div class="cloud2">
                <img src="../assets/images/cloud.png" alt="cloud2">
            </div>
            <div class="cloud3">
                <img src="../assets/images/cloud.png" alt="cloud3">
            </div>
            <div class="cloud1-flip">
                <img src="../assets/images/cloud_flip_horizontal.png" alt="cloud1-flip">
            </div>
            <div class="cloud2-flip">
                <img src="../assets/images/cloud_flip_horizontal.png" alt="cloud2-flip">
            </div>
            <div class="cloud3-flip">
                <img src="../assets/images/cloud_flip_horizontal.png" alt="cloud3-flip">
            </div>
            <div class="button-move-home custom-cursor-hover" @click="redirectToHome">Home</div>
            <div class="button-random">
                <div class="text">Click here to random!</div>
                <div class="arrow">
                    <el-icon>
                        <ArrowDownBold />
                    </el-icon>
                </div>
                <div @click="handleRandom" class="custom-cursor-hover face">
                    <div class="eyes">
                        <div class="eye"></div>
                        <div class="eye"></div>
                    </div>
                </div>
            </div>
        </div>
        <popup-item v-if="dataPopup.isShow" :handleClose="handleClose" :dataPopup="dataPopup">
        </popup-item>
    </main>
</template>
<style lang="scss" scoped>
.tet-wrap-content {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: #980510;
    display: flex;
    justify-content: center;

    .button-move-home {
        position: absolute;
        left: 0;
        margin-top: 20px;
        margin-left: 20px;
        color: yellow;
        font-weight: bold;
        text-decoration-line: underline;
        transition:.4s ;
        &:hover{
            letter-spacing: 6px;
            opacity:0.8;
        }
    }
.no-item {
    text-underline-position: below;
    font-size:16px;
    padding:8px;
    height:30px;
    transition:.3s;
    &:hover {
        letter-spacing:2px;
        font-weight: bold;
    }
}
    .cat {
        position: absolute;
        width: 50px;
        top: 1%;
        height: 50px;
        left: calc(50% + 360px);
        z-index: 7;

        .heart1 {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 30px;
            animation: heart1GoUp 3s ease-in-out infinite;
        }

        .heart2 {
            position: absolute;
            width: 10px;
            height: 10px;
            top: 30px;
            left: 30px;
            animation: heart2GoUp 3s ease-in-out infinite;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .face {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: linear-gradient(180deg, #f44336, #f44336, #ffcd00);

        &:hover {
            background: #ffcd00;

            &:before {
                border-bottom-left-radius: 70px;
                border-bottom-right-radius: 70px;
                height: 22px;
                background: #ccc
            }
        }

        &:before {
            background: #9d0b00;
            content: '';
            display: block;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            height: 10px;
            width: 50px;
            position: absolute;
            transition: 0.5s;
            top: 65px;
            left: 50%;
            transform: translate(-50%, 0)
        }

        .eyes {
            position: relative;
            top: 20px;
            display: flex;
            justify-content: space-around;

            .eye {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #fff;
                display: block;

                &:before {
                    content: "";
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: #000;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    display: block;
                    left: 12px;

                }
            }
        }
    }

    img.png-bg {
        object-fit: contain;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .title {
        position: absolute;
        top: 4%;
        left: 50%;
        width: 500px;
        height: 50px;
        color: yellow;
        transform: translate(-50%, -4%);
        text-align: center;
        font-family: "Merienda", Helvetica, Arial;
        font-size: 20px;
        text-shadow: 0 0 10px yellow,
            0 0 20px rgb(223, 223, 0),
            0 0 30px rgb(179, 179, 0),
            0 0 40px rgb(133, 133, 1);
    }

    .firework {
        position: absolute;
        top: 7%;
        left: 80%;
        width: 100px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .line {
            width: 20px;
            margin-top: 50px;
        }

        .fire {
            width: 100%;
        }
    }

    .show-data {
        position: absolute;
        width: fit-content;
        height: fit-content;
        top: calc(50% - 44px);
        left: calc(50% - 590px);
        transform: translate(-50%, -50%);
        border: 2px solid yellow;
        box-shadow: 0 0 10px yellow;
        padding: 12px;
    }

    .tet-items {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        height: 70%;
        margin-top: 4%;
        background-color: orange;
        justify-content: space-around;
        text-align: center;
        overflow-y: scroll;
        box-shadow: 0 0 10px #000;
        border-radius: 4px;
        padding: 12px 0;

        &::-webkit-scrollbar {
            width: 4px;
            background-color: #ffa500;
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: yellow;
            border-radius: 2px;
        }

        .tet-item {
            width: 22%;
            padding: 12px 24px;
            background-color: red;
            margin: 24px 0;
            height: 300px;
            overflow: hidden;
            position: relative;
            box-shadow: 1px 1px 6px #000;
            transition: 0.4s;

            &:hover {
                scale: 1.1;
            }

            .item-img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }

    .button-random {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 64%;
        left: calc(50% + 600px);
        transform: translate(-50%, -50%);

        button {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            // background: ;
            border-radius: 50%;
        }

        .text {
            position: absolute;
            top: -50px;
            width: 150px;
            left: -24px;
            text-shadow: 0 0 5px #fff, 0 0 10px rgb(216, 216, 216), 0 0 10px rgb(158, 158, 158), 0 0 20px rgb(128, 128, 128);
        }

        .arrow {
            position: absolute;
            top: -5px;
            left: 40px;
            animation: Year_up_down 3s infinite;

        }
    }

    .long_den {
        position: absolute;
        top: -26%;
        left: 18%;
        transform: translate(-50%, -50%);
        z-index: 6;
        width: 50px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        animation: Rotate_part-46af18a3 6s infinite ease-in-out;

        img {
            width: 100%;
            height: 50%;
            display: block;
        }
    }

    .than_tai_2 {
        position: absolute;
        top: 50%;
        left: calc(50% + 180px);
        transform: translate(-50%, -50%);
        width: 360px;
        animation: Than_tai_2 linear 4s infinite;
        height: 180px;
        display: flex;
        justify-content: flex-end;

        .img-wrap {
            width: 50%;
            height: 100%;
            animation: Than_tai_2 linear 4s infinite;

            img {
                width: 100%;
                height: 100%
            }
        }
    }

    .year {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 110px;
        height: 110px;

        img {
            width: 100%;
            height: 100%;
            animation: Year_up_down linear 8s infinite
        }
    }

    .circle-rotate {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
        height: 250px;

        img {
            width: 100%;
            height: 100%;
            animation: Circle_rotate linear 8s infinite
        }
    }

    .circle-rotate-opposite {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 230px;
        height: 230px;

        img {
            width: 100%;
            height: 100%;
            animation: Circle_rotate_opp linear 8s infinite
        }
    }

    .than_tai_1 {
        position: absolute;
        top: 63%;
        left: calc(50% - 450px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Than_tai_1 linear 4s infinite
        }
    }

    .than_tai_2 {
        position: absolute;
        top: 50%;
        left: calc(50% + 180px);
        transform: translate(-50%, -50%);
        width: 360px;
        animation: Than_tai_2 linear 4s infinite;
        height: 180px;
        display: flex;
        justify-content: flex-end;

        .img-wrap {
            width: 50%;
            height: 100%;
            animation: Than_tai_2 linear 4s infinite;

            img {
                width: 100%;
                height: 100%
            }
        }

        .than_tai_2_text {
            position: absolute;
            font-size: 10px;
            width: 20px;
            top: 50px;
            left: 12px;
            z-index: 6;
            text-align: center;
            word-spacing: 10px;
            color: yellow;
            font-weight: bold;
        }
    }

    .cloud1-flip {
        position: absolute;
        top: 100%;
        left: calc(50% + 170px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Cloud1_flip_horizontal linear 4s infinite
        }
    }

    .cloud2-flip {
        position: absolute;
        top: 100%;
        left: calc(50% + 280px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Cloud2_flip_horizontal linear 5s infinite
        }
    }

    .cloud3-flip {
        position: absolute;
        top: 100%;
        left: calc(50% + 350px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Cloud3_flip_horizontal linear 6s infinite
        }
    }

    .cloud1 {
        position: absolute;
        top: 100%;
        left: calc(50% - 170px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Cloud1 linear 4s infinite
        }
    }

    .cloud2 {
        position: absolute;
        top: 100%;
        left: calc(50% - 280px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Cloud2 linear 5s infinite
        }
    }

    .cloud3 {
        position: absolute;
        top: 100%;
        left: calc(50% - 350px);
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
            animation: Cloud3 linear 6s infinite
        }
    }

}

@keyframes heart2GoUp {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }

    50% {
        transform: translate(10px, -10px)
    }

    60% {
        opacity: 1;
    }

    100% {
        transform: translate(10px, -40px);
        opacity: 0;
    }
}

@keyframes heart1GoUp {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }

    50% {
        transform: translate(-10px, -10px)
    }

    60% {
        opacity: 1;
    }

    100% {
        transform: translate(-10px, -40px);
        opacity: 0;
    }
}

@keyframes Year_up_down {

    0%,
    100% {
        transform: translate(0, -25px);
    }

    50% {
        transform: translate(0, -20px);
    }

    25%,
    75% {
        transform: translate(0, -15px);
    }
}

@keyframes Than_tai_1 {

    0%,
    100% {
        transform: translate(-10px, 0px);
        rotate: -10deg;
    }

    50% {
        transform: translate(10px, 0px);
        rotate: 10deg;
    }

    25%,
    75% {
        transform: translate(0, 10px);
        rotate: 0deg;
    }
}

@keyframes Than_tai_2 {

    0%,
    100% {
        transform: translate(5px, 0px);
        rotate: 10deg;
    }

    25%,
    75% {
        transform: translate(0px, 5px);
        rotate: 0deg;
    }

    50% {
        transform: translate(-5px, 0px);
        rotate: -10deg;
    }
}

@keyframes Cloud1_flip_horizontal {

    0%,
    100% {
        transform: translate(10px, -30px);
    }

    50% {
        transform: translate(0px, -50px);
    }
}

@keyframes Cloud2_flip_horizontal {

    0%,
    100% {
        transform: translate(10px, 0px);
    }

    50% {
        transform: translate(10px, -20px);
    }
}

@keyframes Cloud3_flip_horizontal {

    0%,
    100% {
        transform: translate(10px, -10px);
    }

    50% {
        transform: translate(0px, -30px);
    }
}

@keyframes Cloud1 {

    0%,
    100% {
        transform: translate(0px, -30px);
    }

    50% {
        transform: translate(10px, -50px);
    }
}

@keyframes Cloud2 {

    0%,
    100% {
        transform: translate(10px, 0px);
    }

    50% {
        transform: translate(10px, -20px);
    }
}

@keyframes Cloud3 {

    0%,
    100% {
        transform: translate(0px, -10px);
    }

    50% {
        transform: translate(10px, -30px);
    }
}

@keyframes Circle_rotate {
    from {
        rotate: 0deg
    }

    to {
        rotate: 360deg;
    }
}

@keyframes Rotate_part {

    0%,
    100% {
        rotate: -170deg
    }

    50% {
        rotate: -190deg;
    }
}

@keyframes Circle_rotate_opp {
    from {
        rotate: 0deg
    }

    to {
        rotate: -360deg;
    }
}
</style>