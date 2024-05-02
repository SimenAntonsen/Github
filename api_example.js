$.ajax({
    url:"https://api.github.com/repos/SimenAntonsen/MySecondRepo",
    success: function(response) {
        console.log(response)
    }
})