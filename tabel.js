function selamatDatang()
{
    alert("SELAMAT DATANG DI WEBSITE KAMI")
}

function inputform()
{
    var tanggal = document.getElementById("tanggal");
    var kegiatan = document.getElementById("kegiatan");

    if (tanggal.value =="")
    {
        alert("Masukkan Tanggal Kegiatan");
        tanggal.fokus();
    }

    else if (kegiatan.value =="")
    {
        alert("Masukkan Kegiatan Apa Saja Yang Telah Anda Lakukan ");
        kegiatan.fokus();
    }

    else{
        alert (" Data Berhasil Disimpan ");
    }
    
    var tanggal = document.forms["formMasuk"]["tanggal"].value;
    var kegiatan = document.forms["formMasuk"]["kegiatan"].value;
    
    let input = document.getElementById("input");
    var baris = input.insertRow(-1);
    var cell1 = baris.insertCell (0);
    var cell2 = baris.insertCell (1);

    cell1.innerHTML = tanggal;
    cell2.innerHTML = kegiatan;
}
