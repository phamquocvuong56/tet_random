<script>
export default {
    props: {
        type: "",
        dataPopup: {
            type: Object,
            default: {}
        },
        hideToast: {
            type: Function,
            default() { return null }
        },
        timeOut: false
    },
}
</script>
<template>
    <div class="tet-toast">
        <div class="toast-cat"><img src="../assets/images/toast_cat.png" alt="cat toast"></div>
        <div class="tet-toast-item">
            <div class="tet-toast-content">
                <div class="tet-toast-close custom-cursor-hover" @click="hideToast">
                    <el-icon class="custom-cursor-hover" :size=16 :color='green'>
                        <CloseBold />
                    </el-icon>
                </div>
                <div class="tet-toast-text">Please click random button!</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@keyframes transformToLeft {
    from {
        transform: translate(100%, 0);
    }

    to {
        transform: translate(0, 0);
    }
}

.tet-toast {
    text-align: center;
    position: absolute;
    top: 100px;
    width: 250px;
    height: 40px;
    background: yellow;
    right: 8px;
    border-radius: 4px;
    box-shadow: 0 0 10px yellow;
    animation: transformToLeft .5s ease-out;

    .tet-toast-text {
        font-weight: bold
    }

    .toast-cat {
        position: absolute;
        top: -24px;
        left: 0;
        width: 30px;
        height: 30px;

        img {
            width: 100%;
            height: 80%;
        }
    }

    .tet-toast-close {
        position: absolute;
        top: 50%;
        width: 16px;
        right: 8px;
        height: 16px;
        transform: translateY(-50%);
    }

    .tet-toast-content {
        display: flex;
        align-items: center;
        height: 40px;
        padding-left: 12px;
    }
}
</style>