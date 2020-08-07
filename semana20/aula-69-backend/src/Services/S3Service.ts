import {S3} from 'aws-sdk'

export class S3Service {
    private s3 = new S3({
        accessKeyId: "AKIAI6R27TYX6JAAZCRQ",
        secretAccessKey: "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"
    })

    public async uploadFile(input: UploadFileInput): Promise<UploadFileOutput> {
        const result = await this.s3.upload({
            Bucket: 'images-aula-69',
            Key: input.name,
            Body: input.file
        }).promise()

        return {
            link: result.Location
        }
    }
}

interface UploadFileInput {
    name: string
    file: any
}

interface UploadFileOutput {
    link: string;
}