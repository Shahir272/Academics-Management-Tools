document.getElementById("login").addEventListener("click", async function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        const { data, error } = await supabaseClient
            .from('login')
            .insert([
                { username: username, password: password },
            ])
            .select();

        if (error) {
            alert("Error: " + error.message);
            console.error(error);
        } else {
            alert("Login Successful! Data inserted.");
            console.log("Inserted data:", data);
        }
    } else {
        alert("Please enter both username and password.");
    }
});
