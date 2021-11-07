export class Notification {
    constructor(dataUrl, targetBlock) {
        this.dataUrl = dataUrl;
        this.targetBlock = targetBlock;
        this.active = 0;
        this.disable = false;
    }

    async getData(dataUrl) {
        let data = await fetch(dataUrl)
        return await data.json();
    }

    async setData() {
        let data = await this.getData(this.dataUrl);
        this.data = data;
    }

    async render() {
        await this.setData();
        let radioInputs = '';
        for (let { id } of this.data) {
            radioInputs += `<input id='${id}' tabindex='${id + 3}' type="radio" name='notificationRadio' class='notification-form-radio_input' accesskey="${id}"></input>`;
        }

        const blockHTML = `
        <div class='notification-component'>
        <form action="#" name='notificationForm' class='notification-component_form'>
        <div class='notification-component_header'>
            <button tabindex='1' name='notificationButtonClose' class='notification-button notification-button-close' accesskey='C'>X</button>
        </div>       
        <div class='notification-component_body'>
            <p id='notificationTitle' class='notification-component_text notification-component_title'>
            ${this.data[this.active].id}. ${this.data[this.active].title}                
            </p>
            <p id='notificationText' class='notification-component_text'>
            ${this.data[this.active].phrase}   
            </p>
        </div>
        <div class='notification-component_footer'>
                <input tabindex='2' type="checkbox" name='notificationCheckBox' class="notification-form_check" accesskey='D'>
                <label for="notificationCheckBox" class="notification-form-check_label">Disable</label>
                <button tabindex='3' name='notificationButtonDecrease' class='notification-button notification-button-decrease' accesskey='W'><</button>
                ${radioInputs}
                <button tabindex='${this.data.length + 4}' name='notificationButtonIncrease' class='notification-button notification-button-increase' accesskey='S'>></button>
            </form>
        </div>
    </div>`;

        if (!('notificationDisable' in localStorage) || !JSON.parse(localStorage.getItem('notificationDisable'))) {
            this.targetBlock.insertAdjacentHTML('afterbegin', blockHTML);
        } else {
            this.disable = true;
        }
    };

    async initialize() {
        await this.render()
        if (!this.disable) {
            const form = document.forms.notificationForm;
            const closeButoon = form.elements.notificationButtonClose;
            const decreaseButton = form.elements.notificationButtonDecrease;
            const increaseButton = form.elements.notificationButtonIncrease;
            const radioButton = form.elements.notificationRadio;
            const checkBox = form.elements.notificationCheckBox;
            const title = document.getElementById('notificationTitle');
            const text = document.getElementById('notificationText');
             
            const setButtonState = () => {
                if (this.active == 0) {
                    decreaseButton.disabled = true;
                } else {
                    decreaseButton.disabled = false;
                }
                if (this.active == this.data.length - 1) {
                    increaseButton.disabled = true;
                } else {
                    increaseButton.disabled = false;
                }
                radioButton[this.active].checked = true;
            }

            const showData=() => {
                title.textContent=`${this.data[this.active].id}. ${this.data[this.active].title}`;
                text.textContent=this.data[this.active].phrase;
                setButtonState();
            }

            setButtonState();

            form.addEventListener('change', (event) => {
                event.preventDefault();
                if (event.target == checkBox) {
                    this.disable = !this.disable;
                    localStorage.setItem('notificationDisable', JSON.stringify(this.disable))
                }
                if (event.target.name=='notificationRadio') {
                    this.active=event.target.id-1;
                    showData();
                }                
            });

            decreaseButton.addEventListener('click', (event)=>{
                event.preventDefault();
                if (this.active>0) {
                    this.active--;
                } else {
                    this.active=0;                    
                }
                showData();
            })

            increaseButton.addEventListener('click', (event)=>{
                event.preventDefault();
                if (this.active<this.data.length) {
                    this.active++;
                } else {
                    this.active=0;                    
                }
                showData();
            })

            closeButoon.addEventListener('click', (event) => {
                event.preventDefault();
                this.targetBlock.removeChild(event.target.closest('.notification-component'));
            });

            closeButoon.addEventListener('keyup', (event) => {
                event.preventDefault();
                if (event.code == 'Escape') {
                    this.targetBlock.removeChild(event.target.closest('.notification-component'));
                }
            });
        }
    }
}