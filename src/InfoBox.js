import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"

function InfoBox({ title, cases, total, }) {
    return (
        <div>
            <Card>
                <CardContent className="infoBox">

                    {/*Title Coronavirus */}
                    <Typography className="infoBox__title" color="textSecondary">
                        {title}
                    </Typography>

                    {/* +120k Number of cases*/}
                    <h2 className="info__cases">{cases}</h2>

                    {/* 1.2M Total */}
                    <Typography className="info__total" color="textSecondary">
                        {total} Total
                    </Typography>

                </CardContent>
            </Card>
        </div >
    )
}

export default InfoBox
