const ajaxFetch = (props) => {
 let {url, cbSuccess} = props;
fetch(url)
.then(response => response.ok ? response.json() : Promise.reject(response))
.then(json => cbSuccess(json))
.catch(error => {
    let message= error.status.text || 'ocurrió un error';
    document.getElementById('root')
    .innerHTML= <div class="error" >
        <p>`Error ${error.status}: ${message}`</p>
    </div>
})
};

export default ajaxFetch; 

