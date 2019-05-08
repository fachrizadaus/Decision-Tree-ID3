/** Training Data */
var datas = [
    { TrainId: 'A', Psikotest: 'Tinggi', Wawancara: 'Baik', Nilai: 'Bagus', Diterima: 'Ya' },
    { TrainId: 'B', Psikotest: 'Sedang', Wawancara: 'Baik', Nilai: 'Bagus', Diterima: 'Ya' },
    { TrainId: 'C', Psikotest: 'Sedang', Wawancara: 'Buruk', Nilai: 'Bagus', Diterima: 'Ya' },
    { TrainId: 'D', Psikotest: 'Rendah', Wawancara: 'Buruk', Nilai: 'Bagus', Diterima: 'Tidak' },
    { TrainId: 'E', Psikotest: 'Tinggi', Wawancara: 'Baik', Nilai: 'Cukup', Diterima: 'Ya' },
    { TrainId: 'F', Psikotest: 'Sedang', Wawancara: 'Baik', Nilai: 'Cukup', Diterima: 'Ya' },
    { TrainId: 'G', Psikotest: 'Sedang', Wawancara: 'Buruk', Nilai: 'Cukup', Diterima: 'Ya' },
    { TrainId: 'H', Psikotest: 'Rendah', Wawancara: 'Buruk', Nilai: 'Cukup', Diterima: 'Tidak' },
    { TrainId: 'I', Psikotest: 'Tinggi', Wawancara: 'Baik', Nilai: 'Kurang', Diterima: 'Ya' },
    { TrainId: 'J', Psikotest: 'Sedang', Wawancara: 'Buruk', Nilai: 'Kurang', Diterima: 'Tidak' },
    { TrainId: 'K', Psikotest: 'Rendah', Wawancara: 'Baik', Nilai: 'Kurang', Diterima: 'Ya' },
    { TrainId: 'L', Psikotest: 'Tinggi', Wawancara: 'Buruk', Nilai: 'Bagus', Diterima: 'Tidak'}
];

datas = _(datas);
var toShow = ['Psikotest', 'Wawancara', 'Nilai'];

/** Prediction Data */
var q = [
    { Psikotest: 'Rendah', Wawancara: 'Baik', Nilai: 'Bagus'},
    { Psikotest: 'Tinggi', Wawancara: 'Buruk', Nilai: 'Cukup'},
    { Psikotest: 'Rendah', Wawancara: 'Baik', Nilai: 'Cukup'},
    { Psikotest: 'Tinggi', Wawancara: 'Buruk', Nilai: 'Kurang'},
    { Psikotest: 'Sedang', Wawancara: 'Baik', Nilai: 'Kurang'},
    { Psikotest: 'Rendah', Wawancara: 'Buruk', Nilai: 'Kurang'}
];

