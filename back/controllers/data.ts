import { PutObjectCommand, S3Client, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3"
import { Request, Response } from "express";
const client = new S3Client({ region: process.env.AWS_REGION });

export const send = async (req: Request, res: Response) => {
    try {
        const { key, body } = req.body;
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET,
            Key: key,
            Body: body
        })
        const response = await client.send(command)
        return res.status(200).send(response)
    }
    catch (err) {
        return res.status(500).send(err)
    }
}

export const fetch = async (req: Request, res: Response) => {
    try {
        const { key } = req.body;
        const { Body } = await client.send(
            new GetObjectCommand({
                Bucket: process.env.AWS_BUCKET,
                Key: key
            })
        )

        return res.status(200).send(await Body?.transformToString())
    }
    catch (err) {
        return res.status(500).send(err)
    }
}

export const fetchAll = async (req: Request, res: Response) => {
    try {
        const command = new ListObjectsV2Command({
            Bucket: process.env.AWS_BUCKET,
        })

        const { Contents } = await client.send(command);
        let contentList = []
        const paginateBy = 5;
        if (Contents) {
            for (let i = 0; i < Contents.length; i++) {
                let paginationArray = []
                let j = 0
                while (j < paginateBy && (i + j) < Contents.length) {
                    paginationArray.push(Contents[i + j].Key)
                    j++
                }
                contentList.push(paginationArray)
                i += paginateBy - 1
            }
        }
        return res.status(200).send(contentList)
    }
    catch (err) {
        return res.status(500).send(err)
    }
}