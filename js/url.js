//URL Decode Encode
//Hirofumi
//2018/08/26


//Encode URLがクリックで実行されるメソッド
$('#encode-button').on('click', function() {

    //URLフォームから値を取得
    var URL = $('#URLForm').val()
    console.log(URL)
    
    //URLエンコード
    var encodeData = encodeURI(URL)
    console.log(encodeData)

    //Encoded URLの値を設定
    $('#encodedURL-text').val(encodeData);
    });


//Decode URLがクリックで実行されるメソッド
$('#decode-button').on('click', function() {

    //URLフォームから値を取得
    var URL = $('#URLForm').val()
    console.log(URL)

    //URLデコード
    var decodeData = decodeURI(URL)
    console.log(decodeData)

    //Decoded URLの値を設定
    $('#decodedURL-text').val(decodeData);
});
