<script>
export default {
    props: {
        dataPopup: {
            type: Object,
            default: {}
        },
        handleClose: {
            type: Function,
            default() { return null }
        },
        timeOut: false
    },
}
</script>
<template>
    <div class="tet-popup">
        <div class="tet-popup-item">
            <div class="tet-popup-content">
                <div class="tet-popup-close custom-cursor-hover" @click="handleClose(dataPopup.id)">
                    <el-icon class="custom-cursor-hover" :size=30 :color='green'>
                        <CloseBold />
                    </el-icon>
                </div>
                <div class="tet-popup-text">{{ dataPopup.text }}</div>
                <img class="popup-img" :src="dataPopup.path" alt="" width="100%" height="100%">
            </div>
            <div class="tet-popup-value">{{ dataPopup.value }}</div>
        </div>
        <div class="tet-popup-bg">
            <div class="items">
                <div class="blossom-item" style="--i:11">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="meme-item" style="--i:12">
                    <img width="100%" height="100%" src="../assets/images/meme1.png" alt="hoa dao">
                </div>
                <div class="blossom-item" style="--i:24">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:10"></div>
                <div class="blossom-item" style="--i:24">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:10"></div>
                <div class="item" style="--i:14"></div>
                <div class="item" style="--i:30"></div>
                <div class="blossom-item" style="--i:23">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:18"></div>
                <div class="blossom-item" style="--i:19">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:20"></div>
                <div class="blossom-item" style="--i:22">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:25"></div>
                <div class="blossom-item" style="--i:10">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:18"></div>
                <div class="item" style="--i:21"></div>
                <div class="blossom-item" style="--i:15">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:13"></div>
                <div class="blossom-item" style="--i:26">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:17"></div>
                <div class="blossom-item" style="--i:13">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:11"></div>
                <div class="blossom-item" style="--i:11">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:11"></div>
                <div class="blossom-item" style="--i:24">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:10"></div>
                <div class="item" style="--i:14"></div>
                <div class="blossom-item" style="--i:23">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:18"></div>
                <div class="blossom-item" style="--i:11">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:16"></div>
                <div class="item" style="--i:19"></div>
                <div class="blossom-item" style="--i:20">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:22"></div>
                <div class="blossom-item" style="--i:25">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:10"></div>
                <div class="item" style="--i:14"></div>
                <div class="blossom-item" style="--i:23">
                    <img width="100%" height="100%" src="../assets/images/hoa_mai.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:18"></div>
                <div class="blossom-item" style="--i:11">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:16"></div>
                <div class="meme-item" style="--i:15">
                    <img width="100%" height="100%" src="../assets/images/meme2.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:19"></div>
                <div class="blossom-item" style="--i:20">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>
                <div class="item" style="--i:22"></div>
                <div class="blossom-item" style="--i:25">
                    <img width="100%" height="100%" src="../assets/images/hoa_dao.png" alt="hoa dao">
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@keyframes appear {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes transformUp {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-80px);
    }
}

.tet-popup {
    cursor: url('../assets/images/cursor_medium.png'), auto;
    text-align: center;

    .tet-popup-close {
        animation: 1s linear hide,1s appear 1s forwards;
        color: #fff;
        position: absolute;
        top: 0;
        right: -50px;
        width: 50px;
        height: 50px;
        padding: 10px;
    }

    .el-icon {
        transition: 0.8s;
    }

    .tet-popup-close:hover .el-icon {
        transform: rotate(180deg);
    }

    .tet-popup-value {
        animation: 1s linear default,1s transformUp 1s forwards;
        width: 100%;
        height: 100%;
        padding-top: 20px;
        text-align: center;
        background-color: #fff;
        z-index: 1;
        color:rgb(255, 237, 237);
        font-size:25px;
        letter-spacing: 4px;
        font-weight: bold;
        text-shadow: 0 0 10px red,
            0 0 14px rgb(238, 1, 1);
    }

    .tet-popup-text {
        transform: translate(-30%, 100%);
        animation: 1s linear hide,1s appear 1s forwards;
        padding-top: 16px;
        width: 240%;
        height: 100%;
        text-align: center;
        z-index: 2;
        position: absolute;
        color: #fff;
        text-shadow: 0 0 10px yellow,
            0 0 20px rgb(223, 223, 0),
            0 0 30px rgb(179, 179, 0),
            0 0 40px rgb(133, 133, 1);
    }

    .tet-popup-text::before {
        content: attr(data-text);
        position: absolute;
        color: #fff;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
    }

    .tet-popup-item {
        animation: shake 1s linear;
        width: 200px;
        height: 300px;
        position: fixed;
        left: calc(50% - 100px);
        top: 50%;
        transform: translate(0, -50%);
        z-index: 2;

        .popup-img {
            object-fit: cover;
            width: 100%;
            height: 100%
        }

        .tet-popup-content {
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
        }
    }

    .tet-popup-bg {
        position: fixed;
        background-color: #000;
        opacity: 0.9;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        .items {
            display: flex;

            .item {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: rgb(255, 255, 66);
                box-shadow: 0 0 10px yellow, 0 0 20px rgb(212, 212, 0), 0 0 30px rgb(143, 143, 0);
                animation: animate 15s infinite linear;
                animation-duration: calc(80s / var(--i));
                margin: 0 6px;
            }

            .blossom-item {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin: 0 8px;
                animation: animate 15s infinite linear;
                animation-duration: calc(80s / var(--i));

                img {
                    animation: rotate 4s infinite linear
                }
            }

            .meme-item {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-left: 50px;
                animation: animate 15s forwards linear;
                animation-duration: calc(45s / var(--i));
            }
        }
    }
}

@keyframes animate {
    from {
        transform: translate(0, -20vh)
    }

    to {
        transform: translate(0, 110vh)
    }
}

@keyframes rotate {
    from {
        rotate: 0deg
    }

    to {
        rotate: 360deg
    }
}
@keyframes default {
    from {
    }

    to {
    }
}
@keyframes hide {
    from {
        opacity:0;
    }

    to {
        opacity:0;
    }
}

@keyframes shake {
    0% {
        rotate: -15deg
    }

    15% {
        rotate: 15deg
    }

    30% {
        rotate: -15deg
    }

    45% {
        rotate: 15deg
    }

    60% {
        rotate: -15deg
    }

    80% {
        rotate: 15deg
    }

    100% {
        rotate: 0deg
    }
}
</style>