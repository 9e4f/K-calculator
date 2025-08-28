// 更新滑动条值显示
function updateValue(slider) {
    const value = slider.value;
    const id = slider.id;

    // 显示对应的数值
    if (id === 'impact') {
        document.getElementById('impactValue').textContent = value;
    } else if (id === 'scale') {
        document.getElementById('scaleValue').textContent = value;
    } else if (id === 'importance') {
        document.getElementById('importanceValue').textContent = value;
    }

    // 在改变滑动条值时立即更新影响力指数
    calculateK();
}

function calculateK() {
    const impact = parseFloat(document.getElementById('impact').value);
    const scale = parseFloat(document.getElementById('scale').value);
    const importance = parseFloat(document.getElementById('importance').value);

    if (isNaN(impact) || isNaN(scale) || isNaN(importance)) {
        alert('请输入有效的数字');
        return;
    }

    // 公式计算部分
    const K = Math.round(Math.log2((Math.pow(2, impact) * 1/3) + (Math.pow(2, scale) * 1/3) + (Math.pow(2, importance) * 1/3)) * 10) / 10;

    // 显示计算结果
    document.getElementById('result').textContent = '安全等级值K: ' + K;

    // 根据K值返回对应的安全等级
    let level = '';
    if (K >= 1 && K < 1.5) {
        level = '第1级';
    } else if (K >= 1.5 && K < 2.5) {
        level = '第2级';
    } else if (K >= 2.5 && K <= 4) {
        level = '第3级';
    } else if (K > 4 && K < 4.5) {
        level = '第4级';
    } else if (K >= 4.5 && K <= 5) {
        level = '第5级';
    } else {
        level = '无效等级';
    }

    // 显示安全等级并突出显示
    const levelElement = document.getElementById('level');
    levelElement.textContent = '安全等级: ' + level;
    levelElement.classList.add('highlight');
}



