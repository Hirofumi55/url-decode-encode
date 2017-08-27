//URL Decode Encode
//Hirofumi
//2018/08/26


//Encode URLがクリックで実行されるメソッド
$('#encode-button').on('click', function() {

    //URLフォームから値を取得
    var URL = $('URLForm').val()
    alert(URL)
    console.log(URL)
    
    //URLエンコード
    var encodeData = encodeURL(URL)
    alert(encodeData)
    console.log(encodeData)

    //Encoded URLの値を設定
    $('encodedURL-text').innerText(encodeData);
    });


//Decode URLがクリックで実行されるメソッド
$('#decode-button').on('click', function() {

    //URLフォームから値を取得
    var URL = $('URLForm').val()
    alert(URL)
    console.log(URL)

    //URLデコード
    var decodeData = decodeURL(URL)
    alert(decodeData)
    console.log(decodeData)

    //Decoded URLの値を設定
    $('decodedURL-text').innerText(decodeData);
});
