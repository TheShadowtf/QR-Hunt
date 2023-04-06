let selectedImg = [];

let selectedImages = [];

const teams = 
{
    team: ["1500", "8342", "5674"],
    point: [0, 0, 0]
};

let imageID;
let isWin = false;

module.exports = { teams: teams.point[0] };

module.exports =
{
    updateGame: function(teamid, res)
    {
        switch (teamid) {
            case teams.team[0]:
                if (selectedImages[1][4] != "Winner" && selectedImages[2][4] != "Winner")
                {
                    if(imageID == selectedImages[0][0] || imageID == selectedImages[1][0] || imageID == selectedImages[2][0])
                    {
                        if (selectedImages[0][1] == false && imageID == selectedImages[0][0])
                        {
                            selectedImages[0][1] = true;
                            teams.point[0]++;
                            res.render("./verified");
                        } else if (selectedImages[1][1] == false && imageID == selectedImages[1][0])
                        {
                            selectedImages[1][1] = true;
                            teams.point[0]++;
                            res.render("./verified");
                        } else if (selectedImages[2][1] == false && imageID == selectedImages[2][0])
                        {
                            selectedImages[2][1] = true;
                            teams.point[0]++;
                            res.render("./verified");
                        } else if (selectedImages[0][1] || selectedImages[1][1] || selectedImages[2][1])
                        {
                            res.render("./founded");
                        }
                    } else
                    {
                        res.render("./wrong");
                    }
                } else
                {
                    res.render("./winner");
                }
                break;
            case teams.team[1]:
                if (selectedImages[2][4] != "Winner" && selectedImages[0][4] != "Winner")
                {
                    if(imageID == selectedImages[0][0] || imageID == selectedImages[1][0] || imageID == selectedImages[2][0])
                    {
                        if (selectedImages[0][2] == false && imageID == selectedImages[0][0])
                        {
                            selectedImages[0][2] = true;
                            teams.point[1]++;
                            res.render("./verified");
                        } else if (selectedImages[1][2] == false && imageID == selectedImages[1][0])
                        {
                            selectedImages[1][2] = true;
                            teams.point[1]++;
                            res.render("./verified");
                        } else if (selectedImages[2][2] == false && imageID == selectedImages[2][0])
                        {
                            selectedImages[2][2] = true;
                            teams.point[1]++;
                            res.render("./verified");
                        } else if (selectedImages[0][2] || selectedImages[1][2] || selectedImages[2][2])
                        {
                            res.render("./founded");
                        }
                    } else
                    {
                        res.render("./wrong");
                    }
                } else
                {
                    res.render("./winner");
                }
                break;
            case teams.team[2]:
                if (selectedImages[1][4] != "Winner" && selectedImages[0][4] != "Winner")
                {
                    if(imageID == selectedImages[0][0] || imageID == selectedImages[1][0] || imageID == selectedImages[2][0])
                    {
                        if (selectedImages[0][3] == false && imageID == selectedImages[0][0])
                        {
                            selectedImages[0][3] = true;
                            teams.point[2]++;
                            res.render("./verified");
                        } else if (selectedImages[1][3] == false && imageID == selectedImages[1][0])
                        {
                            selectedImages[1][3] = true;
                            teams.point[2]++;
                            res.render("./verified");
                        } else if (selectedImages[2][3] == false && imageID == selectedImages[2][0])
                        {
                            selectedImages[2][3] = true;
                            teams.point[2]++;
                            res.render("./verified");
                        } else if (selectedImages[0][3] || selectedImages[1][3] || selectedImages[2][3])
                        {
                            res.render("./founded");
                        }
                    } else
                    {
                        res.render("./wrong");
                    }
                } else
                {
                    res.render("./winner");
                }
                break;
            default:
                res.render("./iderror");
                break;
        }
    },
    checkFlowerID: function(req)
    {
        let image = req.query.v;
        imageID = image;
    },
    resetGame: function()
    {
        teams.point[0] = 0;
        teams.point[1] = 0;
        teams.point[2] = 0;
        selectedImages = [];
        console.log(teams);
        console.log(selectedImages);
    },
    startGame: function(img)
    {
        img.forEach(element => {
            selectedImages.push([element, false, false, false, ""]);
        });
    },
    getScore: function(teamPoint)
    {
        return teams.point[teamPoint];
    },
    checkWinner: function(team)
    {
        if (!isWin)
        {
            if (selectedImages[0][1] && selectedImages[1][1] && selectedImages[2][1] && selectedImages[1][4] != "Winner" && selectedImages[2][4] != "Winner")
            {
                selectedImages[0][4] = "Winner";
                console.log(selectedImages[0][4]);
            } else if (selectedImages[0][2] && selectedImages[1][2] && selectedImages[2][2] && selectedImages[2][4] != "Winner" && selectedImages[0][4] != "Winner")
            {
                selectedImages[1][4] = "Winner";
                console.log(selectedImages[1][4]);
            } else if (selectedImages[0][3] && selectedImages[1][3] && selectedImages[2][3] && selectedImages[1][4] != "Winner" && selectedImages[0][4] != "Winner")
            {
                selectedImages[2][4] = "Winner";
                console.log(selectedImages[2][4]);
            }
        }
        return selectedImages[team][4];
    }
};