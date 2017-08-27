//URL Decode Encode
//Hirofumi
//2018/08/26


$('#encode-button').on('click', function() {
    var URL = $('URLForm').val()
    alert(URL)
    
    var encodeData = encodeURL(URL)
    alert(encodeData)

    $('encodedURL-text').innerText(encodeData);
    });


$('#decode-button').on('click', function() {
    var URL = $('URLForm').val()
    alert(URL)

    var decodeData = decodeURL(URL)
    alert(decodeData)
 
    $('decodedURL-text').innerText(decodeData);
});
