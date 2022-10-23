let ViewMakanan = document.querySelector("#view-makanan")


async function pilihMakan(id){
    ViewMakanan.innerHTML = ""
    let url = await fetch(`https://6354fd4ada523ceadcf7e8d1.mockapi.io/eats/${id}`);
    let result = await url.json()

    
    
    ViewMakanan.innerHTML = 
    `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="makanan.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/ebd5f245ce.js" crossorigin="anonymous"></script>

    <title>Calcare</title>
</head>

<body>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="../img/CalcareLogo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="toggle">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../index.html">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Makanan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Track-Kalori/trackCal.html">Tracking Kalori</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tracking Diet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dampak Karbon</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-primary" href="login.html">Masuk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><i class="bi bi-bell"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="container-fluid">
            <div class="container section-atas">
                <div class="row backIcon">
                    <a href="#" class="" id="back"><i class="fa-solid fa-chevron-left fa-2xl"></i></a>
                </div>
                <div class="teks">
                    <h6 class="heading">Daftar Pilihan Makanan</h6>
              
                    <p class="paragraf">Pilihlah makanan yang sesuai dengan yang kamu makan dari daftar yang tersedia. Jika tidak ada, coba gunakan fitur pencarian</p>
                </div>
                <div class="date">
                    <input type="date" name="date" class="tanggal"/>
                </div>
                
            </div>
            
            <div class="container section-makanan">
                <div class="container section-makan-pagi">
                    <table class="table tbl-pagi table-borderless">
                        <thead>
                          <tr>
                            <th scope="col" style="background-color: #B8DB70; width:35rem;">Makan Pagi</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Jumlah</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Lemak</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Karb</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Protein</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Kal</th>
                          </tr>
                        </thead>
                        <tbody class="baris-makan-pagi">
                          <tr >
                            <td>${result.name}</td>
                            <td></td>
                            <td>${result.fat}</td>
                            <td>${result.carbohydrate}</td>
                            <td>${result.protein}</td>
                            <td id="kalori">${result.calories}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="tambah-item text-center">
                        <button class="tmbh-item-pagi"><a href="pilihMakanan.html">+ Tambahkan item</a></button>
                      </div>
                </div>

                
            </div>

            <div class="container section-bawah text-center">
            <button type="button" class="btn-lg kalori-btn" > <a href="/Track-Kalori/trackCal.html"> Tracking Kalori </a></button>
                <button type="button" class="btn-lg karbon-btn" > <a href="#"> Tracking Karbon </a></button>
            </div>
        </div>
    </main>

    <footer>
        <div class="container-fluid">
            <div class="kiri">
                <img src="../img/CalcareLogo.png" alt="">
                <h5>Keep your calories for your health</h5>
                <p>Jl. H. R. Rasuna Said Daerah Khusus Ibukota Jakarta 12950</p>
                <div class="medsos">
                    <h5 style="color: white;">
                        Ikuti Kami
                    </h5>
                    <a href="#" style="color: white;"><i class="bi bi-facebook"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-instagram"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-twitter"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-youtube"></i></a>
                </div>
            </div>

            <div class="tengah">
                <h5>Layanan</h5>
                <p>Tentang Kami</p>
                <p>Kebijakan dan Privasi</p>
                <p>Hubungi Kami</p>
                <p>bantuan</p>
            </div>

            <div class="kanan">
                <h5>Challenge Partner</h5>
                <img src="../img/logoDanone.png" alt="">
                <h5>Mitra</h5>
                <img src="../img/logoSkilvul.svg" style="width: 100px;" alt="">
            </div>
        </div>
    </footer>
    </body>`
    var kalori = result.calories;
    localStorage.setItem('kalori', kalori);
}
/*
async function kalori(id){
    ViewMakanan.innerHTML = ""
    let url = await fetch(`https://6354fd4ada523ceadcf7e8d1.mockapi.io/eats/${id}`);
    let result = await url.json()

    
    
    ViewMakanan.innerHTML = 
    `
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/Track-Kalori/trackCal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/ebd5f245ce.js" crossorigin="anonymous"></script>
    <title>Calcare</title>
</head>

<body>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="../img/CalcareLogo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="toggle">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../index.html">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Makanan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tracking Kalori</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tracking Diet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dampak Karbon</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-primary" href="login.html">Masuk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><i class="bi bi-bell"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="container-fluid">
            <div class="container section-atas">
                <div class="row backIcon">
                    <a href="#" class="" id="back"><i class="fa-solid fa-chevron-left fa-2xl"></i></a>
                </div>
                <div class="teks">
                    <h6 class="heading">Track Kalori</h6>
                    <p class="paragraf">Hai, menu Track Kalori menampilkan informasi detail tentang kebutuhan kalori harianmu dan jumlah kalori yang sudah  terpenuhi. Yuk, semangat, pasti bisa memenuhi hidup sehat !</p>
                </div>
                
            </div>
            <div class="container section-track-kal">
                <div class="container track-left">
                    <div class="card card-left" >
                        <div class="row g-0">
                            <h6 class="heading-card">Kebutuhan Kalori Harian</h6>
                            <div class="col-md-6 chart-item">
                                <div class="chart-container">
                                    <div class="chart " data-percent="92" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                    </div>
                                </div>
                            </div>
                          
                          <div class="col-md-4">
                            <div class="card-body">
                              <h5 class="card-title">Dibutuhkan</h5>
                              <p class="card-text"> <span class="fw-bold" id="hitung-cal"></span>  Kkal</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Terpenuhi</h5>
                                <p class="card-text"> <span class="fw-bold" id="cal-terpenuhi">${result.calories}</span> Kkal</p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="container track-right">
                    <div class="card card-right" >
                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="72" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Karbohidrat</p>
                              
                            </div>
                          </div>
                        </div>

                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="32" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Protein</p>
                              
                            </div>
                          </div>
                        </div>


                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="62" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Lemak</p>
                              
                            </div>
                          </div>
                        </div>


                        <div class="row g-0 row-right">
                            <div class="col-md-6 chart-item-right">
                                <div class="chart-container-right">
                                    <div class="chart chart-right" data-percent="42" data-bar-color="#11999E">
                                        <span class="percent" data-after="Kkal"></span>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h6 class="jumlah-nutrisi">0.00g</h6>
                                <p class="keterangan-nutrisi">Karbondioksida</p>
                              
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container section-bawah text-center">
                <button type="button" class="btn-lg" > <a href="../Makanan/makanan.html"> Pilih Makanan </a></button>
                <p class="detail"><a href="#">Lihat Detail</a></p>
            </div>
        </div>
    </main>

    <footer>
        <div class="container-fluid">
            <div class="kiri">
                <img src="../img/CalcareLogo.png" alt="">
                <h5>Keep your calories for your health</h5>
                <p>Jl. H. R. Rasuna Said Daerah Khusus Ibukota Jakarta 12950</p>
                <div class="medsos">
                    <h5 style="color: white;">
                        Ikuti Kami
                    </h5>
                    <a href="#" style="color: white;"><i class="bi bi-facebook"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-instagram"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-twitter"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-youtube"></i></a>
                </div>
            </div>

            <div class="tengah">
                <h5>Layanan</h5>
                <p>Tentang Kami</p>
                <p>Kebijakan dan Privasi</p>
                <p>Hubungi Kami</p>
                <p>bantuan</p>
            </div>

            <div class="kanan">
                <h5>Challenge Partner</h5>
                <img src="../img/logoDanone.png" alt="">
                <h5>Mitra</h5>
                <img src="../img/logoSkilvul.svg" style="width: 100px;" alt="">
            </div>
        </div>
    </footer>
    <script src="/plugins/jquery-2.2.4.min.js"></script>
    <script src="/plugins/jquery.appear.min.js"></script>
    <script src="/plugins/jquery.easypiechart.min.js"></script> 
    <script src="/Track-Kalori/trackCal.js"></script>
    </body>
    `
}
*/