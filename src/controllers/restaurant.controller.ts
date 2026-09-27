import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page"); // qism bolmasa browser sahifada qotib qoladi
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("goLogin");
    // Logic
    // Service model
    // ...
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Error, processLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("goSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, Signup:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("Signup process");
    console.log("body:", req.body); // req.body kiritilgan malumotlar

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
