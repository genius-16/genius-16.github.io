document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('mouseenter', () => {
        // 在鼠标悬停时触发动画效果
        document.body.style.backgroundImage = `url('background-effect.png')`;
        document.body.style.backgroundSize = 'cover';
    });

    character.addEventListener('mouseleave', () => {
        // 当鼠标移开时，恢复原来的背景
        document.body.style.backgroundImage = '';
    });
});
