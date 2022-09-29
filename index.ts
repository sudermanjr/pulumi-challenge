import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const bucket = new aws.s3.BucketV2(
  "bucketV2",
  {
    tags: {
      Name: "sudermanjr-pulumi-challenge-bucket",
    },
  }
);

const bucketAcl = new aws.s3.BucketAclV2("bAcl", {
  bucket: bucket.id,
  acl: aws.s3.PublicReadAcl,
});


// Export the name of the bucket
export const bucketName = bucket.id;
