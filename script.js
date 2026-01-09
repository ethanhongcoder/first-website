// 当页面加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和联系信息元素
    const contactBtn = document.getElementById('contactBtn');
    const contactInfo = document.getElementById('contactInfo');
    
    // 给按钮添加点击事件
    contactBtn.addEventListener('click', function() {
        if (contactInfo.style.display === 'none') {
            // 显示联系方式
            contactInfo.style.display = 'block';
            contactBtn.textContent = '隐藏联系方式';
            
            // 添加一个简单的动画效果
            contactInfo.style.opacity = '0';
            let opacity = 0;
            const fadeIn = setInterval(() => {
                opacity += 0.1;
                contactInfo.style.opacity = opacity.toString();
                if (opacity >= 1) clearInterval(fadeIn);
            }, 30);
        } else {
            // 隐藏联系方式
            contactInfo.style.display = 'none';
            contactBtn.textContent = '点击显示联系方式';
        }
    });
    
    // 控制台欢迎信息（按F12可查看）
    console.log('🎉 欢迎来到法律人的第一个网页！');
    console.log('💡 提示：你是第' + Math.floor(Math.random() * 1000) + '位访问者');
});