import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useContext} from "react";
import {DataContext} from "../../index";


export default function ViewTeamModal() {

    const {viewOneTeam} = useContext(DataContext)
    return (

        <div className="formContainer">
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    title={viewOneTeam.name}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Count of members - {viewOneTeam.countOfMembers}
                    </Typography> <Typography variant="body2" color="text.secondary">
                    Max count of members - {viewOneTeam.maxCountOfMembers}
                </Typography>

                </CardContent>
            </Card>
        </div>
    );
}