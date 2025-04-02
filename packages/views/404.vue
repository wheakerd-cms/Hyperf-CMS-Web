<script lang="ts" setup>
import type {Ref} from 'vue';
import {onMounted, ref} from 'vue';

let divRef: Ref<HTMLDivElement | null> = ref(null);
onMounted(() => {
    if (divRef.value) {
        const str =
            '        <p>&gt; <span>错误代码</span>: "<i>HTTP 404 Not Found</i>"</p>\n' +
            '        <p>&gt; <span>错误描述</span>: "<i>服务器无法找到所请求的资源</i>"</p>\n' +
            '        <p>&gt; <span>错误可能由</span>: [<b>资源关闭，资源移动，资源删除</b>...]\n' +
            '        </p>\n' +
            '        <p>&gt; <span>如果您是此网站的所有者</span>: [请联系您的托管提供商，让他们知道您的web服务器没有完成请求。]</p>\n' +
            '        <p>&gt; <span>祝你今天愉快:-)</span></p>\n' +
            '        <p>&gt; <a href=\'javascript:window.location.href="/";\'>返回首页</a></p>\n' +
            '        <p></p>';
        let i = 0;
        setTimeout(() => {
            const interval = setInterval(function () {
                if (null === divRef.value) return;

                const divRefProxy = divRef.value;
                i++;
                divRefProxy.innerHTML = str.slice(0, i) + '|';
                if (i === str.length) {
                    clearInterval(interval);
                    divRefProxy.innerHTML = str;
                }
            }, 1e1 * 3);
        }, 618);
    }
});
</script>
<template>
    <div class="min-vw-100 min-vh-100 overflow-hidden background" style="background-color: #161618">
        <div ref="divRef"
             class="w-75 position-fixed top-50 start-50 translate-middle py-5 px-5 position-relative"
             style="box-shadow: 0 0 150px -20px rgba(0, 0, 0, 0.8);z-index: 10;">
        </div>
    </div>
</template>
<style lang="css" scoped>
/* 使用 :deep() 确保选择器作用于子元素 */
:deep(p) {
    font-family: "Share Tech Mono", monospace;
    color: #f5f5f5;
    margin: 0 0 20px;
    font-size: 1.2rem;
    line-height: 1.2;
}

:deep(span) {
    color: #f0c674;
}

:deep(i) {
    color: #8abeb7;
}

:deep(div) a {
    text-decoration: none;
}

:deep(b) {
    color: #81a2be;
}

:deep(a) .avatar img {
    border-radius: 100%;
    width: 44px;
    border: 2px solid white;
}

/* 这些是普通的动画效果，不需要穿透 scoped 样式 */
@-webkit-keyframes slide {
    from {
        right: -100px;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        opacity: 0;
    }
    to {
        right: 15px;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
    }
}

@keyframes slide {
    from {
        right: -100px;
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        opacity: 0;
    }
    to {
        right: 15px;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 1;
    }
}

/* 对类选择器也需要使用 :deep */
:deep(.background)::before {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    content: '404';
    font-size: calc(0.8 * (100vw + 100vh) / 2);
    z-index: -10; /* 调整为负值确保背景在下方 */
    color: #f5f5f5;
}

:deep(.bg-opacity-10) {
    opacity: 0.1;
}

:deep(.w-75) {
    width: 75%;
}

:deep(.position-fixed) {
    position: fixed;
}

:deep(.top-50) {
    top: 50%;
}

:deep(.start-50) {
    left: 50%;
}

:deep(.translate-middle) {
    transform: translate(-50%, -50%);
}

:deep(.py-5) {
    padding-top: 3rem;
    padding-bottom: 3rem;
}

:deep(.px-5) {
    padding-left: 3rem;
    padding-right: 3rem;
}

:deep(.position-relative) {
    position: relative;
}
</style>
