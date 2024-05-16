const ajaxFetch = (props) => {
 let {url, cbSuccess} = props;
fetch(url)
.then(response => response.ok ? response.json() : Promise.reject(response))
.then(json => cbSuccess(json))
.catch(error => {
    document.getElementById('root')
    .innerHTML=`
    <div className="error" >
        <p>Error: ${error.message}</p>
    </div>
    ` 
})
};

export default ajaxFetch; 

