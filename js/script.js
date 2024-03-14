function hitungBMI(event) {
    event.preventDefault();

    var tinggi = parseInt(document.getElementById('tinggi').value);
    var berat = parseInt(document.getElementById('berat').value);
    var jenisKelamin;

    var radios = document.getElementsByName('jenisKelamin');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            jenisKelamin = radios[i].value;
            break;
        }
    }

    var bmi = berat / ((tinggi / 100) ** 2);
    var hasilBMI = '';
    var saran = '';

    if (jenisKelamin === 'laki-laki') {
        if (bmi < 18.5) {
            hasilBMI = 'kekurangan berat badan';
            saran = 'makan lebih banyak';
        } else if (bmi < 25) {
            hasilBMI = 'normal';
            saran = 'semangat pertahankan berat badan';
        } else if (bmi < 30) {
            hasilBMI = 'kelebihan berat badan';
            saran = 'yuk kurangi makan dan perbanyak olahraga';
        } else {
            hasilBMI = 'kegemukan';
            saran = 'yuk semangat dan agendakan olahraga rutin';
        }
    } else {
        if (bmi < 17) {
            hasilBMI = 'kekurangan berat badan';
            saran = 'makan lebih banyak';
        } else if (bmi < 23) {
            hasilBMI = 'normal';
            saran = 'semangat pertahankan berat badan';
        } else if (bmi < 27) {
            hasilBMI = 'kelebihan berat badan';
            saran = 'yuk kurangi makan dan perbanyak olahraga';
        } else {
            hasilBMI = 'kegemukan';
            saran = 'yuk semangat dan agendakan olahraga rutin';
        }
    }

    document.querySelector('.container:nth-child(2)').style.display = 'flex';
    
    //the result of calculation
    var hasilDiv = document.getElementById('outputBMI');
    hasilDiv.innerHTML = '<h2>Hasil BMI :</h2>' +
        '<p style="font-size: 30px; font-weight: bold;">' + bmi.toFixed(1) + '</p>' +
        '<p>Anda termasuk kategori ' + hasilBMI + '</p>' +
        '<p>Saran untuk Anda : ' + saran + '</p>';

    // display button download
    var downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download Hasil BMI';
    downloadButton.type = 'button';
    downloadButton.style.cssText = document.querySelector('button[type="submit"]').getAttribute('style')+ '; width: auto;'; // Copy style from submit button
    downloadButton.addEventListener('click', function() {
            // Create BMI calculation result text and code to handle download
        var resultText = 'Hasil BMI\n\n' +
                        'BMI Anda: ' + bmi.toFixed(1) + '\n' +
                        'Kategori BMI: ' + hasilBMI + '\n' +
                        'Saran untuk Anda: ' + saran;

        var blob = new Blob([resultText], { type: 'text/plain' });

        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'hasil_bmi.txt';

        downloadLink.click();

    });
    hasilDiv.appendChild(downloadButton);


    var info = document.getElementById('information');
    info.innerHTML = '<p>Hasil BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan risiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai risiko dan kekhawatiran Anda terkait dengan berat badan Anda. </p>';
}


document.querySelector('button[type="reset"]').addEventListener('click', function() {
    // Menghapus isi dari elemen #outputBMI
    document.getElementById('outputBMI').innerHTML = '';
    document.getElementById('information').innerHTML = '';
    document.querySelector('.container:nth-child(2)').style.display = 'none';
});
