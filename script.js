function calculateK() {
    const E3 = parseFloat(document.getElementById('E3').value);
    const E4 = parseFloat(document.getElementById('E4').value);
    const E5 = parseFloat(document.getElementById('E5').value);

    if (isNaN(E3) || isNaN(E4) || isNaN(E5)) {
        alert('请输入有效的数字');
        return;
    }

    // 公式计算部分
    const K = Math.round(Math.log2((Math.pow(2, E3) * 1/3) + (Math.pow(2, E4) * 1/3) + (Math.pow(2, E5) * 1/3)), 1);

    document.getElementById('result').textContent = 'K = ' + K;
}
