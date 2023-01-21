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
        }
    },
}
</script>
<template>
    <div class="tet-popup">
        <div class="tet-popup-item">
            <div class="tet-popup-content">
                <div class="tet-popup-close custom-cursor-hover" @click="handleClose(dataPopup.id)">
                    <el-icon :size=25 :color='green'>
                        <CloseBold />
                    </el-icon>
                </div>
                <div class="tet-popup-text">{{ dataPopup.text }}</div>
                <img class="popup-img" :src="dataPopup.path" alt="" width="100%" height="100%">
            </div>
            <div class="tet-popup-value">{{ dataPopup.value }}</div>
        </div>
        <div class="tet-popup-bg">
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
        color: #fff;
        position: absolute;
        top: 0;
        right: -40px;
        width: 45px;
        height: 45px;
        padding:10px;
    }

    .el-icon {
        transition: 0.8s;
        cursor: url('../assets/images/cursor_medium.png'), auto;
    }

    .tet-popup-close:hover .el-icon {
        transform: rotate(180deg);
    }

    .tet-popup-value {
        animation: transformUp 1s forwards;
        width: 100%;
        height: 100%;
        padding-top: 30px;
        text-align: center;
        background-color: #fff;
        z-index: 1;
    }

    .tet-popup-text {
        transform: translate(-30%, 100%);
        padding-top: 16px;
        width: 240%;
        height: 100%;
        text-align: center;
        z-index: 2;
        position: absolute;
        color: #fff;
        text-shadow: 0 0 10px #fff,
        0 0 20px rgb(212, 211, 211),
        0 0 30px rgb(158, 158, 158),
        0 0 40px rgb(85, 85, 85);
    }
    .tet-popup-text::before{
        content:attr(data-text);
        position:absolute;
        color:#fff;
        width:100px;
        overflow: hidden;
        white-space: nowrap;
    }

    .tet-popup-item {
        animation: appear 1s linear;
        width: 200px;
        height: 300px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
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
    }
}
</style>