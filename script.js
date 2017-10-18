/**
 * Created by tarun on 5/7/17.
 */
var currenti=-1;

window.onload = function () {
    geti();
    let abt = $('#abt');

    abt.click(function () {
        about();
    });
    $('#str').click(function () {
        story();
    });
    $('#crd').click(function () {
        credits();
    });
    if(currenti===-1)
    {   homee();
        console.log('normal');
    }
    else
    {

        if(currenti===0)
        {
            console.log(currenti);
            create1()
        }
        else
        {
            console.log(currenti);
            create();
        }
    }
};

function savei() {
    localStorage.setItem('i',currenti);

}
function geti() {
    let ret= localStorage.getItem('i');
    if(ret)
    {
        currenti = JSON.parse(ret);
    }
}
function credits() {
    $('#container').empty();
    $('#container').append(`
<div class="row" style="margin-top: 25px">
        <div class="col" id="home"><i class="ion-home" aria-hidden="true" style="margin-left:150px;color:#FFFFF2;font-size: 40px"></i></div>
        <div class="col"></div>
        <div class="col" id="back" style="margin-right:150px;text-align:right"><i class="ion-backspace"  style="color:#FFFFF2;font-size: 40px"></i></div>
    </div>
<div class="card parab" style="text-align: center">
		<h3 style="font-size: 30px;margin-top: 40px">A website is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. ... They may incorporate elements from other websites with suitable markup anchors.</h3>
	</div>
	<div class="card paro" style="margin-left: 115px;position: absolute;top: 40px;">
		<h2 style="margin-top: 10px;font-size: 50px;text-align: center;font-family: 'Indie Flower', cursive">Credits</h2>
	</div>
`);

    let back = document.getElementById('back');
    let home = document.getElementById('home');
    home.addEventListener('click', function (ev) {
        homee();
    });
    back.addEventListener('click', function (ev) {
        let j =currenti;
        if (j === 0) {
            create1();
        }
        else if(j===-1) {
            homee();
        }
        else
        {
            create();
        }
        console.log(j);
    });
}
function story() {
    $('#container').empty();
    $('#container').append(`
<div class="row" style="margin-top: 25px">
        <div class="col" id="home"><i class="ion-home" aria-hidden="true" style="margin-left:150px;color:#FFFFF2;font-size: 40px"></i></div>
        <div class="col"></div>
        <div class="col" id="back" style="margin-right:150px;text-align:right"><i class="ion-backspace"  style="color:#FFFFF2;font-size: 40px"></i></div>
    </div>
<div class="card parab" style="text-align: center">
		<h3 style="font-size: 30px;margin-top: 40px">A website is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. ... They may incorporate elements from other websites with suitable markup anchors.</h3>
	</div>
	<div class="card paro" style="margin-left: 115px;position: absolute;top: 40px;">
		<h2 style="margin-top: 10px;font-size: 50px;text-align: center;font-family: 'Indie Flower', cursive">Story</h2>
	</div>
`);

    let back = document.getElementById('back');
    let home = document.getElementById('home');
    home.addEventListener('click', function (ev) {
        homee();
    });
    back.addEventListener('click', function (ev) {
        let j =currenti;
        if (j === 0) {
            create1();
        }
        else if(j===-1) {
            homee();
        }
        else
        {
            create();
        }
        console.log(j);
    });
}
function about() {
    $('#container').empty();
    $('#container').append(`
<div class="row" style="margin-top: 25px">
        <div class="col" id="home"><i class="ion-home" aria-hidden="true" style="margin-left:150px;color:#FFFFF2;font-size: 40px"></i></div>
        <div class="col"></div>
        <div class="col" id="back" style="margin-right:150px;text-align:right"><i class="ion-backspace"  style="color:#FFFFF2;font-size: 40px"></i></div>
    </div>
<div class="card parab" style="text-align: center">
		<h3 style="font-size: 30px;margin-top: 40px">A website is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. ... They may incorporate elements from other websites with suitable markup anchors.</h3>
	</div>
	<div class="card paro" style="margin-left: 115px;position: absolute;top: 40px;">
		<h2 style="margin-top: 10px;font-size: 50px;text-align: center;font-family: 'Indie Flower', cursive">About</h2>
	</div>
`);

    let back = document.getElementById('back');
    let home = document.getElementById('home');
    home.addEventListener('click', function (ev) {
        homee();
    });
    back.addEventListener('click', function (ev) {
        let j =currenti;
        if (j === 0) {
            create1();
        }
        else if(j===-1) {
            homee();
        }
        else
        {
            create();
        }
        console.log(j);
    });
}
function createn()
{
    $('#container').empty();
    $.getJSON('data.json',function(data) {
        let tree = data;
        $('#container').append(`<div class="card par1" style="height: 300px;top: 130px;">
		<h2 style="font-size: 40px;margin-top: 10px">Which Actor were you thinking of ?</h2>
		<div class="input-group" style="margin-top: 30px">
	<input type="text" class="form-control" placeholder="Enter Here">
</div>
	</div>

	<div class="card paro" id="ok" style="margin-left: 110px;position: absolute;top: 380px;">
		<h2 style="margin-top: 10px;font-size: 50px;text-align: center">Next</h2>
	</div>
`);
        let ok = document.getElementById('ok');
        ok.addEventListener('click', function (ev) {
            create2();
        });
});
}
function create1()
{   currenti=0;
    savei();
    let i=currenti;
    $('#container').empty();
    $.getJSON('data.json',function(data) {
        let tree = data;
        $('#container').append(`<div class="card par1">
		<h2 style="font-size: 40px;margin-top: 10px">${tree[i].cont}</h2>
	</div>
	<div class="card paro" id="ok" style="margin-left: 110px;position: absolute;top: 350px;">
		<h2 style="margin-top: 10px;font-size: 50px;text-align: center">Ok</h2>
	</div>
`);
        let ok = document.getElementById('ok');
        ok.addEventListener('click', function (ev) {
            currenti = tree[i].o;
            savei();
            create(tree[i].o);
        });
    });
    }
    function create2() {
        $('#container').empty();
            $('#container').append(`
 <div class="row" style="margin-top: 25px">
        <div class="col" id="home"><i class="ion-home" aria-hidden="true" style="margin-top:15px;margin-left:70px;color:#FFFFF2;font-size: 60px"></i></div>
        <div class="col"></div>
        <div class="col" id="back" style="margin-right:70px;text-align:right"><i class="ion-backspace"  style="margin-top:15px;color:#FFFFF2;font-size: 60px"></i></div>
    </div>
<div class="card par">
		<h2 style="margin-top: 10px;font-size: 35px">Do you want to play again ?</h2>
	</div>
	<div class="card parl" id="yes">
		<h2 style="margin-top: 20px;font-size: 50px;text-align: center">Yes</h2>
	</div>
	<div class="card parr" id="no">
		<h2 style="margin-top: 20px;font-size: 50px;text-align: center">No</h2>
	</div>
    
    `);
        let yes = document.getElementById('yes');
        let no = document.getElementById('no');
        let back = document.getElementById('back');
        let home = document.getElementById('home');
        home.addEventListener('click', function (ev) {
            homee();
        });
        yes.addEventListener('click', function (ev) {

                currenti = 1;
                savei();
                create();

        });
        back.addEventListener('click', function (ev) {

            let j = tree[i].pr;
            currenti = j;
            savei();
            if (j === 0) {
                create1();
            }
            else {
                create();
            }
            console.log(j);
        });
        no.addEventListener('click', function (ev) {
                homee();

        });
    }
function create() {

    let i = currenti;
    $('#container').empty();
    $.getJSON('data.json',function(data) {
        let tree = data;
        $('#container').append(`
 <div class="row" style="margin-top: 25px">
        <div class="col" id="home"><i class="ion-home" aria-hidden="true" style="margin-top:15px;margin-left:70px;color:#FFFFF2;font-size: 60px"></i></div>
        <div class="col"></div>
        <div class="col" id="back" style="margin-right:70px;text-align:right"><i class="ion-backspace"  style="margin-top:15px;color:#FFFFF2;font-size: 60px"></i></div>
    </div>
<div class="card par">
		<h2 style="margin-top: 10px;font-size: 35px">${tree[i].ques}</h2>
	</div>
	<div class="card parl" id="yes">
		<h2 style="margin-top: 20px;font-size: 50px;text-align: center">Yes</h2>
	</div>
	<div class="card parr" id="no">
		<h2 style="margin-top: 20px;font-size: 50px;text-align: center">No</h2>
	</div>
    
    `);
        let yes = document.getElementById('yes');
        let no = document.getElementById('no');
        let back = document.getElementById('back');
        let home = document.getElementById('home');
        home.addEventListener('click', function (ev) {
            homee();
        });
        yes.addEventListener('click', function (ev) {
            if (tree[i].y===-1) {
                create2()
            }
            else
            {
                currenti = tree[i].y;
                savei();
                create();

            }

        });
        back.addEventListener('click', function (ev) {

            let j = tree[i].pr;
            currenti = j;
            savei();
            if (j === 0) {
                create1();
            }
            else {
                create();
            }
            console.log(j);
        });
        no.addEventListener('click', function (ev) {
            if (tree[i].n===-1) {
             createn();
            }
            else
            {
                currenti = tree[i].n;
                savei();
                create();
            }
        });
    });
}
function homee() {
    currenti = -1;
    savei();
    $('#container').empty();
    $('#container').append(`  <div class="row ">
    <div class="col">
    </div>
    <div class="col" style="margin-left: 50px"><i class="fa fa-play-circle"  id="play" style="font-size: 300px;margin-top:120px;color:white"></i>
    <h2 style="font-family: 'Indie Flower', cursive;text-align: center;margin-right:100px;color:white;font-size: 80px">Play</h2>
    </div>
    <div class="col"></div>
    </div>`);
    let play = document.getElementById('play');
    play.addEventListener('click', function (ev) {
        create1();
    });

}
