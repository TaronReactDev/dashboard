import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FemaleAvatar from "../../../../icon/avatar.png"
import MaleAvatar from "../../../../icon/man.png"


export default function ViewTeamModal({viewOneTeam}) {
    return (

        <div className="formContainer">
            <Card sx={{maxWidth: 345}}>
                <CardHeader

                    title={viewOneTeam.teamName}
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