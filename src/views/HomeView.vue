<script>
export default {
    data() {
        return {
            dataRandom: {
                num50: 1,
                num20: 2,
                num10: 3,
                userNum: 6
            }
        }
    },
    components: {
        //
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
    }
}
</script>
<template>
    <main>
        <!-- <el-form ref="dataRandomRef" :model="dataRandom" status-icon :rules="rules" label-width="120px"
            class="demo-ruleForm">
            <el-form-item label="num50" prop="num50">
                <el-input v-model="dataRandom.num50" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="num20" prop="num20">
                <el-input v-model="dataRandom.num20" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="num10" prop="num10">
                <el-input v-model="dataRandom.num10" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="userNum" prop="userNum">
                <el-input v-model="dataRandom.userNum" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Confirm" prop="checkPass">
                <el-input v-model="dataRandom.checkPass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Age" prop="age">
                <el-input v-model.number="dataRandom.age" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(dataRandomRef)">Submit</el-button>
                <el-button @click="resetForm(dataRandomRef)">Reset</el-button>
            </el-form-item>
        </el-form> -->
        <form action="#" @submit.prevent="handleSubmit" class="form" ref="dataRandomRef">
            <div class="form-group">
                <label for="num50" class="form-label">50</label>
                <input type="text" name="num50" id="num50" v-model="dataRandom.num50">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="num20" class="form-label">20</label>
                <input type="text" name="num20" id="num20" v-model="dataRandom.num20">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="num10" class="form-label">10</label>
                <input type="text" name="num10" id="num10" v-model="dataRandom.num10">
                <span class="form-message"></span>
            </div>
            <div class="form-group">
                <label for="numUsers" class="form-label">numUsers</label>
                <input type="text" name="numUsers" id="numUsers" v-model="dataRandom.userNum">
                <span class="form-message"></span>
            </div>
            <button class="custom-cursor">Submit</button>
        </form>
    </main>
</template>
<style lang="scss" scoped>
.form {
    cursor:url('../assets/images/cursor_medium.png'), auto;
    width: 360px;
    min-height: 100px;
    padding: 32px 24px;
    text-align: center;
    background: #fff;
    border-radius: 2px;
    margin: 24px;
    align-self: center;
    box-shadow: 0 2px 5px 0 rgba(51, 62, 73, .1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
</style>