document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单值
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 简单验证（可根据需要扩展）
    if(name && email && message) {
        document.getElementById('form-response').textContent = '谢谢你的留言，我们会尽快联系你！';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').textContent = '请填写所有必填字段。';
    }
});
