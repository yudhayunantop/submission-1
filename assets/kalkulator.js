    const calculator = {
       imt: null,
       berat: null,
       tinggi: null
    };

    function inputDigit() {
    	let berat = calculator.berat;
    	let tinggi = calculator.tinggi;
    	berat = prompt("Berapa berat badan anda?","Masukkan dalam satuan kilogram");
    	tinggi = prompt("Berapa tinggi badan anda?","Masukkan dalam satuan meter");
      
      hitung(berat,tinggi)
    }    	

    function hitung(berat,tinggi) {
    	let imt = calculator.imt;
    	imt=berat/(tinggi*tinggi);
    	if (imt<18.5) {
    		alert("IMT anda adalah "+imt+" dengan status kurang");
    	}
        
        if (imt>=18.5 && imt<=24.9) {
        	alert("IMT anda adalah "+imt+" dengan status ideal");
        }

    	if (imt>=25 && imt<=29.9) {
    		alert("IMT anda adalah "+imt+" dengan status over");	
    	}
        
    	if (imt>=30) {
    		alert("IMT anda adalah "+imt+" dengan status obesitas");	
    	}

    	 const history = {
                 weight: berat,
                 height: tinggi,
                 index: imt,
             }
             putHistory(history);
             renderHistory();
    }
