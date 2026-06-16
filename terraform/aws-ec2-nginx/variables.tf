variable "aws_region" {
  default = "us-east-1"
}

variable "ami_id" {
  description = "Ubuntu AMI ID for your selected region"
  type        = string
}

variable "key_name" {
  description = "Existing AWS EC2 key pair name"
  type        = string
}

variable "my_ip_cidr" {
  description = "Your public IP in CIDR format, example 102.88.0.1/32"
  type        = string
}
