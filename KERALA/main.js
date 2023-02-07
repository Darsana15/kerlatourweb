let routes = {};
let templates = {};
let app_div = document.getElementById('app');
let hasError = false;

function route(path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    };
};

function validateForm(e) {

    return validateEmail(e.target) || validatePhone(e.target) || validatePassword(e);
}

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(input?.value)) {
        document.querySelector('form').email.focus();
        document.querySelector('form').email.classList.remove("error-invalid");
        requireCheck()
        return true;

    } else {

        document.querySelector('form').email.focus();
        document.querySelector('form').email.classList.add("error-invalid");
        requireCheck()
        return false;

    }

}
function validatePhone(input) {

    validRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (validRegex.test(input?.value)) {
        document.querySelector('form').phone.focus();
        document.querySelector('form').phone.classList.remove("error-invalid");
        requireCheck()
        return true;

    } else {
        document.querySelector('form').phone.focus();
        document.querySelector('form').phone.classList.add("error-invalid");
        requireCheck()
        return false;

    }

}

function validatePassword(e) {
    const input = e.target;
    let strength = 'xxx'
    const validregEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let classname = ''
    const value = input?.value;
    returnVal = false;
    if (value.length < 8) {
        strength = 'Poor';
        classname = 'error-minlength';
        if (!!input.nextElementSibling) {
            input.nextElementSibling.innerHTML = 'Minimum 8 characters required.';
        }
        returnVal = false
    } else if (!validregEx.test(input.value)) {
        document.querySelector('form').pwd.classList.remove('error-minlength');
        classname = 'error-invalid';
        strength = 'Poor';
        if (!!input.nextElementSibling) {

            input.nextElementSibling.innerHTML = 'Atleast one uppercase, one lowercase and one number required.';
        }
        returnVal = false;
    } else {
        document.querySelector('form').pwd.classList.remove('error-invalid');
        document.querySelector('form').pwd.classList.remove('error-minlength');
        if (!!input.nextElementSibling) {

            input.nextElementSibling.innerHTML = '';
        }
        classname = 'valid';
        strength = value.length >= 10 ? 'Strong' : 'Medium';
        returnVal = true;

    }

    const strengthEl = document.getElementById('strength');
    if (!!strengthEl) {
        strengthEl.innerHTML = `Password strength: <span  >${strength}</span> `;

        strengthEl.setAttribute('class', strength.toLowerCase());
        confirmPwd();
    }
    // document.querySelector('form').pwd.focus();
    document.querySelector('form').pwd.classList.add(classname);

    requireCheck();
    return returnVal;
}

function confirmPwd() {
    if (document.querySelector('form').pwd.value !== document.querySelector('form').pwd2.value) {
        document.querySelector('form').pwd2.classList.add('error-invalid');
    } else {
        document.querySelector('form').pwd2.classList.remove('error-invalid');

    }
}


function home() {
    let div = document.createElement('div');


    div.innerHTML = `<div class="tm-row">
    <div class="tm-col-left"></div>
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Header title</h2>
            <div class="media p-3">
                <div class="media-body">
                    <p>
                        Flanked by the Arabian Sea in the West, the towering Western Ghats in the East and
                        networked by 44 interconnected rivers, Kerala is blessed with a unique set of
                        geographical features that have made it one of the most sought after tourist
                        destinations in Asia. A long shoreline with serene beaches, tranquil stretches of
                        emerald backwaters, lush hill stations and exotic wildlife, are just a few of the
                        wonders that await you once you crossover to the other side. And what's more, each of
                        these charming destinations is only a two hour drive from the other - a singular
                        advantage no other place on the planet can offer.

                        Kerala prides itself for being the flag bearer for not just how a culture can respect
                        its past but also march forward with growth &amp; progress as well. Hundred percent
                        literacy, world-class health care systems, India's lowest infant mortality and highest
                        life expectancy rates are among a few of the milestones that the people of the state are
                        extremely proud of.
                    </p>
                </div>
            </div>

        </section>
    </main>
</div>`;

    app_div.appendChild(div);
};


function login() {
    let div = document.createElement('div');


    div.innerHTML = `<div class="tm-row login-form">
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Login</h2>
            <div class="media p-3">
                <div class="media-body">
                <form name="loginform" onchange="checkForDisable(event)">
                <h6 class=" mb-3 fw-normal">Please sign in</h6>
            
                <div class="form-floating ">
                    <input type="email" required="true" class="form-control" onInput="validateEmail(event.target)" onKeyUp="checkForDisable(event)"  name='email' id="floatingInput" placeholder="name@example.com">
                    <div class="invalid-feedback px-1">Invalid Email</div>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mt-3">
                  <input type="password" required="true"   onKeyUp="requireCheck();checkForDisable(event)"  name="pwd" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
            
                <div class="checkbox mt-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mt-3" type="submit" disabled="true">Login</button>
                 
              </form>
                </div>
            </div>

        </section>
    </main>
</div>`;

    app_div.appendChild(div);
    requireCheck(div);

};


function signup() {
    let div = document.createElement('div');


    div.innerHTML = `<div class="tm-row login-form">
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Sign Up</h2>
            <div class="media p-3">
                <div class="media-body">
                <form name="signupform" onchange="checkForDisable(event)">
                <h6 class=" fw-normal">Enter Your Info</h6>
                
                <div class="form-floating mt-3">
                  <input type="email" class="form-control" required="true" autocomplete="off" onInput="validateEmail(event.target)" onKeyUp="checkForDisable(event)" name='email' id="floatingInput" placeholder="name@example.com">
                  <div class="invalid-feedback px-1">Invalid Email</div>
                  <label for="floatingInput">Email address</label>

                </div>
                <div class="form-floating mt-3">
                  <input type="phone" class="form-control" required="true" autocomplete="off"  onInput="validatePhone(event.target)" onKeyUp="checkForDisable(event)"  name='phone' id="floatingInput" placeholder="000-000-0000">
                  <div class="invalid-feedback px-1">Invalid Phone Number</div>
                  <label for="floatingInput">Phone</label>
                </div>
                <div class="form-floating mt-3">
                  <input type="password" class="form-control" autocomplete="off"  required="true" onInput="validatePassword(event)" onKeyUp="checkForDisable(event)"  name='pwd' id="floatingPassword" placeholder="Password">
                  <div class="invalid-feedback px-1" ></div>
                  <small id="strength"></small>
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-floating mt-3">
                  <input type="password" class="form-control" autocomplete="off"  required="true" onInput="confirmPwd()"  onKeyUp="checkForDisable(event)"  name='pwd2' id="floatingPassword" placeholder="Password">
                  <div class="invalid-feedback px-1" >Password Missmatch</div>
                  <label for="floatingPassword">Confirm Password</label>
                </div>
            
                <button   class="w-100 btn mt-3 btn-lg btn-primary" disabled="true" type="submit">Sign Up</button>
                
              </form>
                </div>
            </div>

        </section>
    </main>
</div>`;
    // document.querySelector('form').addEventListener('keyup', checkForDisable());
    app_div.appendChild(div);
    requireCheck(div);
};

function checkForDisable(event) {
    const item = event.target.form.getElementsByClassName('btn-primary')[0] //;
    if (document.getElementsByClassName('error-invalid').length === 0 && document.getElementsByClassName('error-minlength').length === 0 && document.getElementsByClassName('required-check').length == 0) {
        item.removeAttribute('disabled')

    } else {
        item.setAttribute('disabled', true)
    }

}
function template(name, templateFunction) {
    return templates[name] = templateFunction;
};

template('home', function () {
    home();
});

template('signup', function () {
    signup();
});


template('login', function () {
    login();
});

template('tvm', function () {
    const template = `<div class="tm-row">
    <div class="tm-col-left"></div>
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Thiruvananthapuram</h2>
            <div class="media p-3">
                <div class="media-body">
                    <p>
                        Flanked by the Arabian Sea in the West, the towering Western Ghats in the East and
                        networked by 44 interconnected rivers, Kerala is blessed with a unique set of
                        geographical features that have made it one of the most sought after tourist
                        destinations in Asia. A long shoreline with serene beaches, tranquil stretches of
                        emerald backwaters, lush hill stations and exotic wildlife, are just a few of the
                        wonders that await you once you crossover to the other side. And what's more, each of
                        these charming destinations is only a two hour drive from the other - a singular
                        advantage no other place on the planet can offer.

                        Kerala prides itself for being the flag bearer for not just how a culture can respect
                        its past but also march forward with growth &amp; progress as well. Hundred percent
                        literacy, world-class health care systems, India's lowest infant mortality and highest
                        life expectancy rates are among a few of the milestones that the people of the state are
                        extremely proud of.
                    </p>
                </div>
            </div>

        </section>
    </main>
</div>`;
    district(template);
});


template('pta', function () {
    const template = `<div class="tm-row">
    <div class="tm-col-left"></div>
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Pathanamthitta</h2>
            <div class="media p-3">
                <div class="media-body">
                    <p>
                        Flanked by the Arabian Sea in the West, the towering Western Ghats in the East and
                        networked by 44 interconnected rivers, Kerala is blessed with a unique set of
                        geographical features that have made it one of the most sought after tourist
                        destinations in Asia. A long shoreline with serene beaches, tranquil stretches of
                        emerald backwaters, lush hill stations and exotic wildlife, are just a few of the
                        wonders that await you once you crossover to the other side. And what's more, each of
                        these charming destinations is only a two hour drive from the other - a singular
                        advantage no other place on the planet can offer.

                        Kerala prides itself for being the flag bearer for not just how a culture can respect
                        its past but also march forward with growth &amp; progress as well. Hundred percent
                        literacy, world-class health care systems, India's lowest infant mortality and highest
                        life expectancy rates are among a few of the milestones that the people of the state are
                        extremely proud of.
                    </p>
                </div>
            </div>

        </section>
    </main>
</div>`;
    district(template);
});


template('ekm', function () {


       const template = `<div class="tm-row">
        <div class="tm-col-left"></div>
        <main class="tm-col-right">
            <section class="tm-content tm-about ">
                <h2 class="p-3 tm-content-title border-bottom">Eranakulam</h2>
                <div class="media p-3">
                    <div class="media-body">
                        <p>
                            Flanked by the Arabian Sea in the West, the towering Western Ghats in the East and
                            networked by 44 interconnected rivers, Kerala is blessed with a unique set of
                            geographical features that have made it one of the most sought after tourist
                            destinations in Asia. A long shoreline with serene beaches, tranquil stretches of
                            emerald backwaters, lush hill stations and exotic wildlife, are just a few of the
                            wonders that await you once you crossover to the other side. And what's more, each of
                            these charming destinations is only a two hour drive from the other - a singular
                            advantage no other place on the planet can offer.

                            Kerala prides itself for being the flag bearer for not just how a culture can respect
                            its past but also march forward with growth &amp; progress as well. Hundred percent
                            literacy, world-class health care systems, India's lowest infant mortality and highest
                            life expectancy rates are among a few of the milestones that the people of the state are
                            extremely proud of.
                        </p>
                    </div>
                </div>

            </section>
        </main>
    </div>`;
    district(template);
});


template('alpy', function () {
    const template = `<div class="tm-row">
    <div class="tm-col-left"></div>
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Alappuzha</h2>
            <div class="media p-3">
                <div class="media-body">
                    <p>
                        Flanked by the Arabian Sea in the West, the towering Western Ghats in the East and
                        networked by 44 interconnected rivers, Kerala is blessed with a unique set of
                        geographical features that have made it one of the most sought after tourist
                        destinations in Asia. A long shoreline with serene beaches, tranquil stretches of
                        emerald backwaters, lush hill stations and exotic wildlife, are just a few of the
                        wonders that await you once you crossover to the other side. And what's more, each of
                        these charming destinations is only a two hour drive from the other - a singular
                        advantage no other place on the planet can offer.

                        Kerala prides itself for being the flag bearer for not just how a culture can respect
                        its past but also march forward with growth &amp; progress as well. Hundred percent
                        literacy, world-class health care systems, India's lowest infant mortality and highest
                        life expectancy rates are among a few of the milestones that the people of the state are
                        extremely proud of.
                    </p>
                </div>
            </div>

        </section>
    </main>
</div>`;
    district(template);
});


template('ktm', function () {
    const template = `<div class="tm-row">
    <div class="tm-col-left"></div>
    <main class="tm-col-right">
        <section class="tm-content tm-about ">
            <h2 class="p-3 tm-content-title border-bottom">Kottayam</h2>
            <div class="media p-3">
                <div class="media-body">
                    <p>
                        Flanked by the Arabian Sea in the West, the towering Western Ghats in the East and
                        networked by 44 interconnected rivers, Kerala is blessed with a unique set of
                        geographical features that have made it one of the most sought after tourist
                        destinations in Asia. A long shoreline with serene beaches, tranquil stretches of
                        emerald backwaters, lush hill stations and exotic wildlife, are just a few of the
                        wonders that await you once you crossover to the other side. And what's more, each of
                        these charming destinations is only a two hour drive from the other - a singular
                        advantage no other place on the planet can offer.

                        Kerala prides itself for being the flag bearer for not just how a culture can respect
                        its past but also march forward with growth &amp; progress as well. Hundred percent
                        literacy, world-class health care systems, India's lowest infant mortality and highest
                        life expectancy rates are among a few of the milestones that the people of the state are
                        extremely proud of.
                    </p>
                </div>
            </div>

        </section>
    </main>
</div>`;
    district(template);
});
route('/', 'home');
route('/signup', 'signup');
route('/login', 'login');
route('/tvm', 'tvm');
route('/pta', 'pta');
route('/ekm', 'ekm');
route('/alpy', 'alpy');
route('/ktm', 'ktm');

function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};


function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);
    app_div.innerHTML = ''
    route();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

function district(content) {
    let div = document.createElement('div');


    div.innerHTML = content;

    app_div.appendChild(div);
};

function requireCheck(div) {
    document.querySelector('form').querySelectorAll('[required="true"]').forEach(ctrl => {
        if (!ctrl.value) {
            ctrl.classList.add('required-check');
        } else {
            ctrl.classList.remove('required-check');

        }
    });
}